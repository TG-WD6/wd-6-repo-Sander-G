const form = document.querySelector("form");
const input = document.getElementById("searchInput");
const ul = document.querySelector("ul");
const searchArray = [];

localStorage.setItem('items', JSON.stringify(searchArray));
const data = JSON.parse(localStorage.getItem('items'));



function liMaker(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function (event) {
   event.preventDefault(); // prevent default submit action
   searchArray.push(input.value); // user input toevoegen aan search Array
   localStorage.setItem('items', JSON.stringify(searchArray)); // javascript object naar string omzetten
   
   
   liMaker(input.value); // voeg item toe aan front end lijst
    input.value = ''; // reset input field na submit
  })



 // filter om input te vergelijken met local storage 
  input.addEventListener("input", function () {
    let result = [];

    if (input.value) {
        result = JSON.parse(localStorage.getItem("items")).filter(
            function (searchWord) {
                if (searchWord.toUpperCase().includes(input.value.toUpperCase())) {
                    return searchWord;
                }
            else return;
    });    
    }

  });



//zoek suggesties weergeven tijdens input ahv filter




