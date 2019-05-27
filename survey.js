const questions = [
  {
    prompt: "Who does Beth shoot?\n (a) Mr.Poopybutthole\n (b) Unmuscular Michael\n (c) Abradolph Linkler",
    answer: "a"
  },
  {
    prompt: "Who are Ricks 2 best friends?\n (a)Abradolph Linkler & Gear Head\n (b) Squanchy & Bird Person\n (c) Sleepy Gary & Cousin Nick",
    answer: "a"
  },
  {
    prompt: "Morty has a baby with an alien robot. What non-human species makes up the other half?\n (a)Gazorpazorp (b) red (c) red",
    answer: "a"
  }
]

const score = 0;

for (let i=0; i < questions.length; i++){
  let response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score ++;
    alert("Correct!")
  } else {
    alert("Wrong!")
  }
}

alert("You are unmuscular Michael!")