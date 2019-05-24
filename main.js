// const fetch = require('node-fetch');

const inventors = [
  {
    id: 1,
    name: 'Rick Sanchez', status: 'Alive', species: 'Human', type: '', gender: 'Male' },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Female',
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
  {
    id: 10,
    name: 'Alan Rails',
    status: 'Dead',
    species: 'Human',
    type: 'Superhuman (Ghost trains summoner)',
    gender: 'Male',
  },
  {
    id: 11,
    name: 'Albert Einstein',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
  {
    id: 12,
    name: 'Alexander',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
  },
  {
    id: 13,
    name: 'Alien Googah',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'unknown',
  },
  {
    id: 14,
    name: 'Alien Morty',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
  },
  {
    id: 15,
    name: 'Alien Rick',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
  },
  {
    id: 16,
    name: 'Amish Cyborg',
    status: 'Dead',
    species: 'Alien',
    type: 'Parasite, Cyborg',
    gender: 'Male',
  },
  {
    id: 17,
    name: 'Annie',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
  },
  {
    id: 18,
    name: 'Antenna Morty',
    status: 'Alive',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
  },
  {
    id: 19,
    name: 'Antenna Rick',
    status: 'unknown',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
  },
  {
    id: 20,
    name: 'Ants in my Eyes Johnson',
    status: 'unknown',
    species: 'Human',
    type: 'Human with ants in his eyes',
    gender: 'Male',
  }
];


inventors.forEach(inventor => {
  let newDiv = document.createElement("div")
  newDiv.innerHTML = `${inventor.name}, ${inventor.species}(${inventor.type})`;
  document.body.appendChild(newDiv);
})




// const RMapi = () => {
//   const RickandMorty = fetch("https://rickandmortyapi.com/api/character/")
//     .then((response) => {
//   return response.json();
//   })
//     .then((data) => {
//   console.log(data);
//   })
//   // const RMresults = RickandMorty.results
//   // console.log(RMresults)
// }

// (RMapi());


// charsDiv.className = 'characterlist';
// charsDiv.id = 'chars';

// const RMchars = (chars) => {
// }

// const chars2 = [
//   { name: 'Rick Sanchez', status: 'Alive', species: 'Human'}
// ]

// chars2.forEach(character => {
//   let charDiv = document.createElement("div")
//   charDiv.innerHTML = `${character.name}`
//   document.body.appendChild(charDiv)
// })


chars2.forEach(inventor => {
  let newDiv = document.createElement("div")
  newDiv.innerHTML = `${inventor.first} (${inventor.year} - ${inventor.passed})`;
  document.body.appendChild(newDiv);
})