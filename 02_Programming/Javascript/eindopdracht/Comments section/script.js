window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
    addComment(ev);
});

function addComment(ev) {
    let commentText;
    let wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';


    if (hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
      


        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';

        textBox.innerHTML = commentText;
        textBox.style.borderRadius = "40px";
        textBox.style.height = "auto";
        textBox.style.maxWidth = "300px";
        textBox.style.textIndent = ".2em";
        textBox.style.padding = "14px";
        textBox.classList.add('NewComment');
        textBox.style.position = "relative";

        wrapDiv.append(textBox, replyButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    }

    else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        // textBox.style.border = "1px solid black";
        // textBox.style.backgroundColor = "#f5f5dc";
        textBox.style.borderRadius = "40px";
        textBox.style.height = "auto";
        textBox.style.width = "300px";
        textBox.style.maxWidth = "300px";
        textBox.style.padding = "14px";
        textBox.classList.add('NewReply');
        

        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, deleteButton);
    }
    setOnLocalStorage();
}

function setOnLocalStorage() {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';


        const textArea = document.createElement('textarea');
        textArea.classList.add('replyBox');

        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';


        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className = 'cancelReply';

        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);
    }

    else if (hasClass(e.target, 'addReply')) {
        addComment(e);
    }

    else if (hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    }

    else if (hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});