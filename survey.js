// const fetch = require('node-fetch');

function first49() {
  let counter = 0
  const nums = []
  let data = '';

  while (counter < 50) {
    nums.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function second49() {
  let counter = 50
  const nums2 = []
  let data = '';

  while (counter < 100) {
    nums2.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums2}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function third49() {
  let counter = 100
  const nums3 = []
  let data = '';

  while (counter < 150) {
    nums3.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums3}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function four49() {
  let counter = 150
  const nums4 = []
  let data = '';

  while (counter < 200) {
    nums4.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums4}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function five49() {
  let counter = 200
  const nums5 = []
  let data = '';

  while (counter < 250) {
    nums5.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums5}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function six49() {
  let counter = 250
  const nums6 = []
  let data = '';

  while (counter < 300) {
    nums6.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums6}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function seven49() {
  let counter = 300
  const nums7 = []
  let data = '';

  while (counter < 350) {
    nums7.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums7}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function eight49() {
  let counter = 350
  const nums8 = []
  let data = '';

  while (counter < 400) {
    nums8.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums8}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function nine49() {
  let counter = 400
  const nums9 = []
  let data = '';

  while (counter < 450) {
    nums9.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums9}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}

function ten49() {
  let counter = 450
  const nums10 = []
  let data = '';

  while (counter < 494) {
    nums10.push(counter)
    counter += 1
  }
  fetch(`https://rickandmortyapi.com/api/character/${nums10}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    console.log(data);
  });
}



// first49()
// second49()
// third49()
// four49()
// five49()
// six49()
// seven49()
// eight49()
// nine49()
// ten49()

const first = ['Morty','Baby Legs','Black Rick']
const second = ['Rick','Chrombobulus Michael','Bird Person']
const third = ['Abradolph Linker','Adjudicator Rick', 'Antenna Morty']
const forth = ['Ants in my eyes Johnson','Armagheadon','Antenna Rick']
const fifth = ['Ghost in a jar']
const sixth = ['Ghost Train']
const seventh = ['One Million Ants']


const answerCounter = (correctAnswerCounter) => {
  if (correctAnswerCounter === 0) {
    // first49()
    let answer = first49[Math.floor(Math.random()*first49.length)];
    alert(answer);
  } else if (correctAnswerCounter === 1) {
    let answer = second[Math.floor(Math.random()*second.length)];
    alert(answer);
  } else if (correctAnswerCounter === 2) {
    let answer = third[Math.floor(Math.random()*third.length)];
    alert(answer);
  } else if (correctAnswerCounter === 3) {
    let answer = forth[Math.floor(Math.random()*forth.length)];
    alert(answer);
  } else if (correctAnswerCounter === 4) {
    let answer = fifth[Math.floor(Math.random()*fifth.length)];
    alert(answer);
  } else if (correctAnswerCounter === 5) {
    let answer = sixth[Math.floor(Math.random()*sixth.length)];
    alert(answer);
  } else if (correctAnswerCounter === 6) {
    first49()
    let answer = seventh[Math.floor(Math.random()*seventh.length)];
    alert(answer)
  }
}

const quiz = [
  [1, "Who does Beth shoot?\n (a) Mr.Poopybutthole\n (b) Unmuscular Michael\n (c) Abradolph Linkler", "a"],
  [2, "Whose the best?\n (a) Squanchy\n (b) Sleepy Gary\n (c) Gazorpazord Field","b"],
  [3, "Rick creates a theme park in a homeless. What is it called?\n (a)Homeless Homes\n (b)Oganopolis\n (c)Anatomy Park","c"],
  [4, "Morty has a baby with an alien robot. What non-human species makes up the other half?\n (a)Gazorpazorp\n (b)Cronenberg\n (c)Alien Parasite","a"],
  [5, "What a shmeckle?\n (a)Ricks cat person friends\n (b)A bin on Gear Head's planet\n (c)A currency","c"],
  [6, "Which one of these is an Alien Parasite?\n (a)Ghost in a jar\n (b)Counsin Nicky\n (c)Sleepy Gary\n (d)All of them","d"]
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