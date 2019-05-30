
// 76 Locations
const getLocationData = () => {
  let counter = 1
  let nums = []
  let data = '';

  while (counter < 76) {
    nums.push(counter)
    counter += 1
  }

  axios.get(`https://rickandmortyapi.com/api/location/${nums}`)
  .then((response) => {
    return response.data
  })
  .then((myJson) => {
    data = myJson

  // fetch(`https://rickandmortyapi.com/api/location/${nums}`)
  // .then(function(response) {

  //   return response.json(); 
  // })
  // .then(function(myJson) {
  //   data = myJson;
  //   let container = document.querySelector("#container");

    data.forEach(function(result) {
    let newDiv = document.createElement("Div")
    newDiv.classList.add("locationDiv")

    let num = document.createElement("p")
    num.innerText = result.id

    let name = document.createElement("p")
    name.innerText = result.name

    let type =document.createElement("p")
    type.innerText = result.type

    let Dimension = document.createElement("p")
    Dimension.innerText = result.dimension
    container.appendChild(newDiv)
    newDiv.appendChild(num);
    newDiv.appendChild(name);
    newDiv.appendChild(Dimension);
    newDiv.appendChild(type)
    })
  })
}

getLocationData()


// dimension, id, name