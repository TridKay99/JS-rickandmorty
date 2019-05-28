// function getData() {
//   let counter = 1
//   const nums = []

//   while (counter < 493) {
//     nums.push(counter)
//     counter += 1
//   }

  // fetch(`https://rickandmortyapi.com/api/character/${nums}`)
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     console.log(data)
  //   })
  // }

// const button = document.querySelector("button")
// button.addEventListener("click", () => {
  // getData()
// })
function getData()
  let counter = 1
  const nums = []
  let data = '';

while (counter < 493) {
  nums.push(counter)
  
fetch(`https://rickandmortyapi.com/api/character/${nums}`)
  .then(function(response) {
      console.log(response)
    return response.json();
  })
  .then(function(myJson) {
        data = myJson;
        console.log(data)
        console.log(data.results.length);
        let container = document.querySelector("#container");

        data.results.forEach(function(result) {
        let newImg = document.createElement("img");
        newImg.src = result.image;
        console.log(result.image)
        container.appendChild(newImg);
    });
    getData();
  })}