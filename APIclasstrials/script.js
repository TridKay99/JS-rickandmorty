// const fetch = require('node-fetch');
const chars = []

// const RMapi = () => {
//   const RickandMorty = fetch("https://rickandmortyapi.com/api/character/?page=2")
//   RickandMorty
//     .then((response) => {
//   return response.json();
//   })
//     .then((data) => {
//       // const char = data.results[0]
//   console.log(data);
//   })
// }

// RMapi()

const group1 = fetch("https://rickandmortyapi.com/api/character/")
const group2 = fetch("https://rickandmortyapi.com/api/character/?page=19")
const group3 = fetch("https://rickandmortyapi.com/api/character/?page=18")

Promise.all([group1,group2,group3])
  .then((characters) => {
    characters.forEach((response) => {
      getData(response.json())
    })
  })

  const getData = (response) => {
    response.then((data) => {
      chars.push(data.results[0])
    })
  }
console.log(chars);

// const charsDiv = document.querySelector(".container")

// results.forEach(character => {
//   charsDiv.innerHTML += `${character.name}, ${character.species}(${character.type})`;
// })


// const button = document.querySelector("button")
// button.addEventListener("click", getUserData1);
// const users = []
// ^^^ use this as the call in the rick and morty. rather than making my own



// const user1 = fetch("https://randomuser.me/api/")
// const user2 = fetch("https://randomuser.me/api/")
// const user3 = fetch("https://randomuser.me/api/")


// Promise.all([user1,user2,user3])
// .then((values) => {
//   values.forEach((response) => {
//     getData(response.json())
//   })
// });

// const getData = (response) => {
//   response.then((data) => {
//     users.push(data.results[0])
//   })
// }
// console.log(users);