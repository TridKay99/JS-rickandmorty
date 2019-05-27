const Button = document.querySelector("#bitch-button");

Button.addEventListener("click", (event) => {
  fetchURLs();
});

const users = [];
const usersResults = [];

async function fetchURLs() {
  try {

    let responseData = await Promise.all([
      fetch('https://rickandmortyapi.com/api/character/').then((response) => response.json()),
      fetch('https://rickandmortyapi.com/api/character/?page=19').then((response) => response.json()),
      fetch('https://rickandmortyapi.com/api/character/?page=18').then((response) => response.json()),
      fetch('https://rickandmortyapi.com/api/character/?page=17').then((response) => response.json()),
      fetch('https://rickandmortyapi.com/api/character/?page=16').then((response) => response.json())
    ]);

    for(let response of responseData) {
      console.log("Here's a user: ", response);
      users.push(response);
      // const objArray = users.results
      // console.log(objArray);
      let individualChars = users.find(character => character.results);
      individualChars.results.forEach(usersReults.push)
      console.log(usersResults);
    }
  } catch (error) {
    console.log(error);
  }
}
// array inside an object called results
// object has no name

// TRIED TO CLAIM IT AS 'Object' - THE ARRAY INSIDE THE OBJECT IS TITLE 'results'
// const objArray = Object.results;
// console.log(objArray)

// {…}
//  results: (20) […]
//    0: Object { id: 1, name: "Rick Sanchez", status: "Alive", … }

// const topWatchFriends = (id) => {
//   let findTopWatch = users.find(user => user.userId === id);
//   findTopWatch.friends.forEach(friendId => {
//     movies.forEach(movie => {
//       movies.watchlist.forEach(watchlistId => {