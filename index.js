//How well do you know India?
var takeInput = require('readline-sync'); 
const chalk = require('chalk');
var highestScore = 10;
var score = 0; 

var userName = takeInput.question(chalk.bgBlue.bold('Enter your name please?'))
console.log(chalk.bgGreen.bold('Welcome! Mr/Ms.',userName));

var questionOne = {
  question: chalk.bgBlue.bold("Who is PM of India?"),
  answer: "Narendra Modi",
}

var questionTwo = {
  question: chalk.bgBlue.bold("What is Capital of India?"),
  answer: "Delhi",
}

var questionThree = {
  question: chalk.bgBlue.bold("What is National Anthem of India?"),
  answer: "Jan Gan Man",
}

var questionFour = {
  question: chalk.bgBlue.bold("What is National Bird of India?"),
  answer: "Peacock",
}

var questionFive = {
  question: chalk.bgBlue.bold("Which is Largest continent?"),
  answer: "Asia",
}

var questionSix = {
  question: chalk.bgBlue.bold("Who was the first Woman Prime Minister of India?"),
  answer: "Indira Gandhi",
}

var questionSeven = {
  question: chalk.bgBlue.bold("What is National Animal of India?"),
  answer: "Tiger",
}

var questionEight = {
  question: chalk.bgBlue.bold("Which is the smallest planet in our solar system?"),
  answer: "Mercury",
}

var questionNine = {
  question: chalk.bgBlue.bold("Gidha is Folk Dance of which State of India?"),
  answer: "Punjab",
}

var questionTen = {
  question: chalk.bgBlue.bold("Who is Father of our Nation?"),
  answer: "Mahatma Gandhi",
}

//array of ojects
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function play(question,answer)
{
  var userAnswer = takeInput.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log(chalk.bgGreen('Correct!'));
      score++;
    }
    else
    {
      console.log(chalk.bgRed('Incorrect!'));
      score--;
    }
}


for(var i=0;i<questions.length;i++)
{
  var question = questions[i];
  play(question.question,question.answer); 
}

if(highestScore<=score)
{
  console.log(chalk.bgGreen('Congratulations,You scored the highest!',score));
}


console.log(chalk.bgGreen('Highest Score is: ',highestScore));
console.log(chalk.bgRed('Congratulations,You scored:',score));

