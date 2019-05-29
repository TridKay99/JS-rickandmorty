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

function six49() {
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
      answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 1) {
    const promiseValueTwo = second49()
    promiseValueTwo.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 2) {
    const promiseValueThree = third49()
    promiseValueThree.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 3) {
    const promiseValueFour = forth49()
    promiseValueFour.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 4) {
    const promiseValueFive = fifth49()
    promiseValueFive.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length).name];
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 5) {
    const promiseValueSix = sixth49()
    promiseValueSix.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 6) {
    const promiseValueSeven = seventh49()
    promiseValueSeven.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 7) {
    const promiseValueEigth = eighth49()
    promiseValueEigth.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else if (correctAnswerCounter === 8) {
    const promiseValueNinth = ninth49()
    promiseValueNinth.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })

  } else {
    const promiseValuetenth = tenth49()
    promiseValuetenth.then((data) => {
      let answer = data[Math.floor(Math.random()*data.length)].name;
      alert(`Your Rick and Morty character is ${answer}`);
    })
  }
}

const quiz = [
  [1, "Who does Beth shoot?\n (a) Mr.Poopybutthole\n (b) Unmuscular Michael\n (c) Abradolph Linkler", "a"],
  [2, "Whose the best?\n (a) Squanchy\n (b) Sleepy Gary\n (c) Gazorpazord Field","b"],
  [3, "Rick creates a theme park in a homeless. What is it called?\n (a)Homeless Homes\n (b)Oganopolis\n (c)Anatomy Park","c"],
  [4, "Morty has a baby with an alien robot. What non-human species makes up the other half?\n (a)Gazorpazorp\n (b)Cronenberg\n (c)Alien Parasite","a"],
  [5, "What a shmeckle?\n (a)Ricks cat person friends\n (b)A bin on Gear Head's planet\n (c)A currency","c"],
  [6, "Which one of these is an Alien Parasite?\n (a)Ghost in a jar\n (b)Counsin Nicky\n (c)Sleepy Gary\n (d)All of them","d"],
  [7, "What is Scary Terry's catch phrase?\n (a) Bitch\n (b) Run and Hide, kid\n (c) Im gonna get ya!","a"],
  [8, "What is the name of the Homeless man Rick builds the them park in?\n (a) Steven\n (b) Ruben\n (c) Unity","b"],
  [9, "What is the name of the hitman morty kills?\n (a) Chrombobulus Michael\n (b) Korblockian\n (c) Shleem","a"],
  [10, "What species can have sex with both Men and Women?\n (a) Cronenbergs\n (b) Eye Hole People\n (c) Trunk People","c"]
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