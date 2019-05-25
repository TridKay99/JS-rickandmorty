const Qs = [

  {
    prompt: "What does wubba lubba dub dub mean?\n(a) Please leave\n(b) I'm a genius\n(c) I'm in great pain",
    answer:"c"
  },
  {
    prompt: "Who killed Birdperson in a horrific turnabout during his wedding?\n(a) Tammy\n (b) Gear Head\n (c)Unmuscular Michael",
    answer: "a"  
  },
  {
    prompt: "Rick built a theme park inside of a homeless man. What is that theme park called?\n (a) Organopolis\n (b) Body Land\n (c)Anatomy Park",
    answer: "c"
  },
  {
    prompt: "Morty has a weird alien child with an alien robot. What species is the non-human?\n (a) Smarkian\n(b) Chronenberg\n (c) Gazorpazorp",
    answer: "c"
  },
  {
    prompt: "who does Beth shoot?\n (a) Mr.Poopybutthole\n (b) Squanchy\n (c) Baby Legs",
    answer: "a"
  }
]

const score = 0;

for(let i=0; i < Qs.length; i++){
  let response = window.prompt(Qs[i].prompt);
  if(response == quetions[i].answer){
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!")
  }
}
alert("You are Unmuscular Michael")