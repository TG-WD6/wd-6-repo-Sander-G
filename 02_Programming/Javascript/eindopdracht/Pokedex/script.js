
// https://www.youtube.com/watch?v=5CFafWpWwxo
// -> make proxy server to avoid cors errors


const url = 'http://localhost:3000/';
const getTransformer = () => {
    fetch(url)
     .then(res => res.json())
    //  .then(data => console.log(data))
     .then(data => {
        const transformer = {};
        transformer['id'] = data.id;
        transformer['name'] = data.name;
        transformer['allegiance'] = data.allegiance;
        transformer['allegiance_name'] = data.allegiance_name;
        transformer['image'] = data.image; 
        transformer['subgroup'] = data.subgroup;
        transformer['subgroup_name'] = data.subgroup_name;
        transformer['role'] = data.role;

      //   transformer['description'] = data.description;
        console.log(transformer);
     })
  
  
  
  
    }

  getTransformer ();

  