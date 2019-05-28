// const chars2 = []

// const group1 = fetch("https://rickandmortyapi.com/api/character/")
// const group2 = fetch("https://rickandmortyapi.com/api/character/?page=19")
// const group3 = fetch("https://rickandmortyapi.com/api/character/?page=18")

// Promise.all([group1,group2,group3])
//   .then((characters) => {
//     characters.forEach((response) => {
//       getData(response.json())
//     })
//   })

//   const getData = (response) => {
//     response.then((data) => {
//       chars2.push(data.results[0])
//     })
//   }
// return(chars2);
function getData() {
  let counter = 1
  const nums = []
  let data = '';
  
  while (counter < 493) {
    nums.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums}`)
    .then(function(response) {
        // console.log(response)
      return response.json();
    })
    .then(function(myJson) {
          data = myJson;
          let container = document.querySelector("#container");
  
          data.forEach(function(result) {
          let newImg = document.createElement("img");
          newImg.src = result.image;
          console.log(result.image)
          container.appendChild(newImg);
      });
    })}
  
  
  getData()




// while (counter < 493) {
//   nums.push(counter)
//   counter += 1
// }

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

// const charsDiv = document.querySelector(".container")

// chars.forEach(character => {
//   charsDiv.innerHTML += `${character.name}, ${character.species}(${character.type})`;
// })
