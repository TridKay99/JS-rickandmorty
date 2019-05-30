// const fetch = require('node-fetch');

function first49() {
  let counter = 0
  const nums = []
  let data = '';

  while (counter < 50) {
    nums.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function second49() {
  let counter = 50
  const nums2 = []
  let data = '';

  while (counter < 100) {
    nums2.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums2}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function third49() {
  let counter = 100
  const nums3 = []
  let data = '';

  while (counter < 150) {
    nums3.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums3}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function forth49() {
  let counter = 150
  const nums4 = []
  let data = '';

  while (counter < 200) {
    nums4.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums4}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function fifth49() {
  let counter = 200
  const nums5 = []
  let data = '';

  while (counter < 250) {
    nums5.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums5}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function sixth49() {
  let counter = 250
  const nums6 = []
  let data = '';

  while (counter < 300) {
    nums6.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums6}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function seventh49() {
  let counter = 300
  const nums7 = []
  let data = '';

  while (counter < 350) {
    nums7.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums7}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function eighth49() {
  let counter = 350
  const nums8 = []
  let data = '';

  while (counter < 400) {
    nums8.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums8}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function ninth49() {
  let counter = 400
  const nums9 = []
  let data = '';

  while (counter < 450) {
    nums9.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums9}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

function tenth49() {
  let counter = 450
  const nums10 = []
  let data = '';

  while (counter < 494) {
    nums10.push(counter)
    counter += 1
  }
  const myPromise = fetch(`https://rickandmortyapi.com/api/character/${nums10}`)
  .then(function(response) {
    return response.json();
  })
  return myPromise
}

let answer;

const answerCounter = (correctAnswerCounter) => {
  if (correctAnswerCounter === 0) {
    const promiseValueOne = first49()
    promiseValueOne.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

      // choose container - where to place information
    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
    
    // Appending information to the html
    // container.appendchil(id)
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 1) {
    const promiseValueTwo = second49()
    promiseValueTwo.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = `Name: ${answer.name}`;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 2) {
    const promiseValueThree = third49()
    promiseValueThree.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 3) {
    const promiseValueFour = forth49()
    promiseValueFour.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 4) {
    const promiseValueFive = fifth49()
    promiseValueFive.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 5) {
    const promiseValueSix = sixth49()
    promiseValueSix.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 6) {
    const promiseValueSeven = seventh49()
    promiseValueSeven.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 7) {
    const promiseValueEigth = eighth49()
    promiseValueEigth.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else if (correctAnswerCounter === 8) {
    const promiseValueNinth = ninth49()
    promiseValueNinth.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })

  } else {
    const promiseValuetenth = tenth49()
    promiseValuetenth.then((data) => {
    let answer = data[Math.floor(Math.random()*data.length)];
    alert(`Your Rick and Morty character is id:${answer.id} ${answer.name}`);

    let container = document.querySelector(".container");

    let name = document.createElement("p");
    name.innerText = answer.name;

    let species = document.createElement("p");
    species.innerText = answer.species;

    let type = document.createElement("p");
    type.innerText = answer.type;
    
    let status = document.createElement("p")
    status.innerText = answer.status;

    const image = `
      <img src="${answer.image}">
    `
  
    container.appendChild(name)
    container.appendChild(species)
    container.appendChild(type)
    container.appendChild(status)
    document.body.children[1].insertAdjacentHTML("beforeend", image)
    })
  }
}

const quiz = [
  [1, "ANSWER QUESTION BY TYPING THE LETTER AND CLICK ENTER. i.e a\n Who would you shoot first?\n (a) Mr.Poopybutthole\n (b) Unmuscular Michael\n (c) Abradolph Linkler\n (d) Million ants", "a"],
  [2, "Who would you be friends with?\n (a) Squanchy\n (b) Sleepy Gary\n (c) Gazorpazord Field\n (d) King Flippy Nips\n (e) Shmlona Shmlobinson","e"],
  [3, "Which Vindicator would you rather be?\n (a) Alan Rails\n (b) Noob-Noob\n (c) Supernova","b"],
  [4, "What race would you prefer to be?\n (a) Gazorpazorp\n (b) Cronenberg\n (c) Alien Parasite\n (d) Gear People","a"],
  [5, "What song would you sing to Armagheadon?\n (a) Get Schwifty\n (b) Wrecking Ball\n (c) Australian National Anthem","b"],
  [6, "Which one of these Alien Parasite's would you be friends with?\n (a) Ghost in a jar\n (b) Cousin Nicky\n (c) Amish Robot\n (d) Pencilvester","d"],
  [7, "Who do you respect?\n (a) Rick\n (b) Principal Vagina\n (c) Bird Person\n (d) Photography Raptor","a"],
  [8, "Would you give your sexual organ to Shrimply Pibbles?\n (a) Yes\n (b) No","b"],
  [9, "Who would you hire as a Hitman?\n (a) Chrombobulus Michael\n (b) Rick\n (c) The Devil\n (d) Pencilvester","a"],
  [10, "What interdimensional TV show would you watch?\n (a) Ball Fondlers\n (b) Jan Michael Vincent\n (c) Alien invasion tomato monster mexican armanda brothers\n we are just regular brothers running in a van from an asteroid\n and all sorts of things the movie\n (d) Pichael Thompsons Cooking show","c"]
];


let correctAnswerCounter = 0

for(let i=0; i < quiz.length; i += 1) {
  const answer = prompt(quiz[i][1]);
  const response = answer.toLowerCase();
  if (response === quiz[i][2]){
    correctAnswerCounter +=1
  } else {
    correctAnswerCounter +=0
  }
}

answerCounter(correctAnswerCounter)
