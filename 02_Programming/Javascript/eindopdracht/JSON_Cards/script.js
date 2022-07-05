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
    const mainContainer = document.getElementById('container');
    for (let i = 0; i < data.length; i++) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('card__wrapper');
      // add class to wrapper
      const title = document.createElement('h2');
      title.innerHTML = data[i].Name;
      const allegiance = document.createElement('h3');
      allegiance.innerHTML = 'Allegiance: ' + data[i].Allegiance;
      const subgroup = document.createElement('p');
      subgroup.innerHTML = 'Subgroup: ' + data[i].Subgroup;
      const img = document.createElement('img');
      img.classList.add('transformer__image');
      img.src = data[i].imgURL;
      img.style.width = "251px";
      mainContainer.appendChild(wrapper);
      wrapper.append(title, allegiance, subgroup, img);


    }

  }

}
fetchTransformer();

// const images = document.querySelectorAll(".transformer__image img");
// const modal = document.querySelector(".modal");
// const modal__img = document.queryselector(".modal__img");
// const close = document.querySelector(".close");

// images.forEach((image) => {
//   image.addEventListener("click", () => {
//     modal.classList.add("appear");

//   });
// })




