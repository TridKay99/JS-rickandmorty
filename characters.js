// 493 characters
function getData() {
  let counter = 1
  const nums = []
  let data = '';
  
while (counter < 494) {
  nums.push(counter)
  counter += 1
}
fetch(`https://rickandmortyapi.com/api/character/${nums}`)
  .then(function(response) {

    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    let container = document.querySelector("#container");

    data.forEach(function(result) {
    // Id number
    let Id = document.createElement("p")
    Id.innerText = result.id

    // Name
    let Name = document.createElement("p");
    Name.innerText = result.name;

    // Species
    let Species = document.createElement("p")
    Species.innerText = result.species

    // Type e.g "Ants in his eyes human"
    let Type = document.createElement("p")
    Type.innerText = result.type
    
    // Creating 2 divs to place information inside
    let newDiv = document.createElement("Div")
    let insideDiv = document.createElement("Div")

    // Making all images a div
    newDiv.style.background = `url(${result.image})`
    newDiv.style.backgroundSize = "cover"
    newDiv.style.backgroundPosition = "center";
    newDiv.style.marginBottom = "20px"
    // creating a class for 'newDiv' for css
    newDiv.classList.add("card")


    // creating a class for 'insideDiv' for css
    insideDiv.classList.add("insideCard")
    insideDiv.style.opacity = "0.6"
    // Attaching the picture divs to the container.
    container.appendChild(newDiv);

    // Attaching another div to the inside of the picture divs
    newDiv.appendChild(insideDiv);

    // Attaching info to the insideDiv.
    insideDiv.appendChild(Id);
    insideDiv.appendChild(Name);
    insideDiv.appendChild(Species);
    insideDiv.appendChild(Type);
  });
})}


getData()