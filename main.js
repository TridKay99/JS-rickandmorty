function getData() {
  let counter = 1
  const nums = []
  let data = '';
  
while (counter < 25) {
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
        let newName = document.createElement("name");
        newName.innerHTML = result.name;
        console.log(result.name);

        let newDiv = document.createElement("Div")
        let newImg = document.createElement("img");
        newImg.src = result.image;
        console.log(result.image)
        container.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newName);
    });
  })}


getData()