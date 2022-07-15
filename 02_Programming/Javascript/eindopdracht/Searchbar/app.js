


const form = document.querySelector('form');                      // form querySelector
const input = document.getElementById('searchInput');             // user input constant
const output = document.querySelector('.output')                  // div voor weergave zoek items
const ul = document.getElementById('listMaker');                  // Lijst voor ListMaker


let searchArray = [];                                             // declaratie searchArray voor ingevoerde zoektermen
localStorage.setItem('items', JSON.stringify(searchArray));       // searchArray items in localstorage
const data = JSON.parse(localStorage.getItem('items'));           // items uit localstorage halen





function listMaker(text) {                                        // user input toevoegen aan listmaker lijst
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {                    // event listener voor submit van zoekterm
  e.preventDefault();                                             // prevent default submit action (..iets met geen server)
  searchArray.push(input.value);                                  // user input toevoegen aan search Array on submit
  localStorage.setItem('items', JSON.stringify(searchArray));     // javascript search array object naar string omzetten on submit


  listMaker(input.value);                                         // voeg item toe aan listMaker lijst
  input.value = '';                                               // reset inputfield na submit
});

input.addEventListener('input', filter);                          // event listener op user input voor filter

function filter(ev) {
  // console.log(ev.target.value.toLowerCase());  // capture wat de gebruiker invult per keystroke
  let temp = '';
  const result = searchArray.filter(function (items) {
    return items.toLowerCase().includes(ev.target.value.toLowerCase());
  });

  // console.log(result)                  // log resultaat van vergelijking van input met searcharray items 

  if (result.length > 0) {                                        // als resultaat van vergl gevonden dan geef voor ieder
    temp = `<ul class='search-items'>`;                           // item een list item in search-items lijst
    result.forEach((item) => {
      temp += `<li class='search-item'> ${item} </li>`;
    });
    temp += `</ul>`;
  }
  else {
    temp = `<li class='search-item'></li>`;                       // anders geef leeg list item terug
  }
  output.innerHTML = temp;                                        // temp -> output html 
}


document.querySelector('input').addEventListener('keyup', function (evenement) {
  if (this.value == '')
    output.style.opacity = 0;                                     // zoekresultaten niet
  else output.style.opacity = 1;                                  // weergeven bij lege zoekbar

});



















