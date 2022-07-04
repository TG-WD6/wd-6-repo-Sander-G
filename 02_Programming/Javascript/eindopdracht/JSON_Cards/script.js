const data = ('./files/data.json');
const fetchTransformer = () => {
  fetch('./files/data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // for (let i = 0; i < data.length; i++)
      // console.log(data);
    

      appendData(data);
    })
    .catch(function (err) {
      console.log(err);
    })

function appendData(data) {
const mainContainer = document.getElementById('transformerDex');
for (let i = 0; i < data.length; i++) {
  const div = document.createElement('div');
  div.innerHTML = 'Name: ' + data[i].Name + '   ' + 'Allegiance: ' + data[i].Allegiance ; 

  mainContainer.appendChild(div);
}

}   




}
fetchTransformer();

