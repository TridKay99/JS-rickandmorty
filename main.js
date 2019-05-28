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
        let p = document.createElement("p");
        p.innerText = result.name;
        console.log(result.name);

        let newDiv = document.createElement("Div")
        newDiv.style.background = `url(${result.image})`
        newDiv.style.backgroundSize = "cover"
        newDiv.style.backgroundPosition = "center";
        newDiv.classList.add("card")
        container.appendChild(newDiv);
        newDiv.appendChild(p);
    });
  })}


getData()