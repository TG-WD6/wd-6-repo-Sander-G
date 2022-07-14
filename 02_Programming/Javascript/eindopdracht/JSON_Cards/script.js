

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
      const wrapper = document.createElement('div');                                            // wrapper div toevoegen
      wrapper.classList.add('card__wrapper');                                                   // add class to wrapper 
      const title = document.createElement('h2');
      title.innerHTML = data[i].Name;
      const allegiance = document.createElement('h3');
      allegiance.innerHTML = 'Allegiance: ' + data[i].Allegiance;
      const subgroup = document.createElement('p');
      subgroup.innerHTML = 'Subgroup: ' + data[i].Subgroup;
      const img = document.createElement('img');
      img.classList.add('modal__image');
      img.src = data[i].imgURL;
      img.style.width = "251px";
      mainContainer.appendChild(wrapper);                                                       // wrapper aan container div koppelen
      wrapper.append(title, allegiance, subgroup, img);                                         // title, allegiance, subgroup, img aan wrapper toevoegen     
    }





    const image = document.querySelectorAll(".modal__image");
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close");
    const modalContent = document.querySelector(".modal__content")
    const modalPlaatje = document.querySelector(".modal__plaatje");

    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
    modal.pointerEvents = "none";

    image.forEach((image) => {
      image.addEventListener("click", (e) => {
        console.log(e.target.src);
        modalPlaatje.src = e.target.src;
        modal.style.opacity = "1";
        modal.style.zIndex = "1";
        modal.pointerEvents = "all";
      });
    });

    close.addEventListener("click", (e) => {
      modal.style.opacity = "0";
      modal.style.zIndex = "-1";
      modal.pointerEvents = "none";
      console.log(e)
    });

  }
};
fetchTransformer();



  //////////////////////////////
 //    Achtergrondkleuren    //
//////////////////////////////

// None: '#fceaff',
// Autobot: '#ff3333',
// Decepticon: '#f8d5a3',
// Quintesson: '#97b3e6',
// Unicron: '#eaeda1',











