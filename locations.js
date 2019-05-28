// 76 Locations
const getLocationData = () => {
  let counter = 1
  let nums = []
  let data = '';

  while (counter < 76) {
    nums.push(counter)
    counter += 1
  }

  fetch(`https://rickandmortyapi.com/api/location/${nums}`)
  .then(function(response) {

    return response.json(); 
  })
  .then(function(myJson) {
    data = myJson;
    let container = document.querySelector("#container");

    data.forEach(function(result) {
    let newDiv = document.createElement("Div")
    newDiv.classList.add("locationDiv")

    let Id = document.createElement("p");
    Id.innerText = result.id

    let Name = document.createElement("p")
    Name.innerText = result.name

    let Type = document.createElement("p")
    Type.innerText = result.type

    let Dimension = document.createElement("p")
    Dimension.innerText = result.dimension
    container.appendChild(newDiv)
    newDiv.appendChild(Id);
    newDiv.appendChild(Name);
    newDiv.appendChild(Type);
    newDiv.appendChild(Dimension);
    })
  })
}

getLocationData()