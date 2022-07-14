const data = ('./files/data.json');
const fetchTransformer = () => {
  fetch('./files/data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {                                                 // loggen data voor alle items:
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
      const wrapper = document.createElement('div');                         // wrapper div toevoegen
      wrapper.classList.add('card__wrapper');                                // add class to wrapper 
      const title = document.createElement('h2');
      title.innerHTML = data[i].Name;
      const allegiance = document.createElement('h3');
      allegiance.innerHTML = 'Allegiance: ' + data[i].Allegiance;
      const subgroup = document.createElement('p');
      subgroup.innerHTML = 'Subgroup: ' + data[i].Subgroup;
      const img = document.createElement('img');
      img.classList.add('modal__image');
      img.src = data[i].imgURL;
      img.style.width = "253px";
      mainContainer.appendChild(wrapper);                                      // wrapper aan container div koppelen
      wrapper.append(title, allegiance, subgroup, img);                        // title, allegiance, subgroup, img aan wrapper toevoegen     
    
    }
    const modalContent = document.querySelector(".modal__content");
    const image = document.querySelectorAll(".modal__image");
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close");
    const modalPic = document.querySelector(".modal__pic");

    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
    modal.pointerEvents = "none";

    image.forEach((image) => {
      image.addEventListener("click", (e) => {
        modalPic.src = e.target.src;
        modal.style.opacity = "1";
        modal.style.zIndex = "1";
        modal.pointerEvents = "all";
        document.getElementById("transform").play();
      });



    });

    close.addEventListener("click", (e) => {
      modal.style.opacity = "0";
      modal.style.zIndex = "-1";
      modal.pointerEvents = "none";
    });

  

  }

  
};

fetchTransformer();



  //////////////////////////////
 //    Achtergrondkleuren    //
//////////////////////////////

// const BGcolor = colors[allegiance];
// const card__wrapper = document.querySelector(".card__wrapper");
// card__wrapper.style.backgroundColor = BGcolor;

// const colors = {
//   None: '#fceaff',
//   Autobot: '#ff3333',
//   Decepticon: '#f8d5a3',
//   Quintesson: '#97b3e6',
//   Unicron: '#eaeda1',
// }











