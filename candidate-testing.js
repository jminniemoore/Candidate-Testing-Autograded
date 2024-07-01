const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = ""


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
"Sally Ride",
'true',
"40",
"Trajectory",
"3", 
 ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
askForName = input.question("What is your name?: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i = 0; i < questions.length; i++){
    (input.question(questions[i]));
}
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
  console.log(`Correct, ${correctAnswer} is the first woman in space!`)
} else {
  console.log("No, that is not correct. Try again.")
}


let numOfCorrectAnswers = 0
let numberOfQuizQuestions = questions.length;

let grade = (numOfCorrectAnswers/numberOfQuizQuestions)*100;
  //TODO 3.2 use this variable to calculate the candidates score.
  for(let i = 0; i < correctAnswers.length; i++){
    if(correctAnswers === candidateAnswers){
      console.log(`Question ${i+1} = Good job! You answered ${candidateAnswer.toLowerCase()} and ${correctAnswer.toLowerCase()} is the correct answer.`);
      numOfCorrectAnswers++;
    }else {
      console.log(`Question ${i+1} = ${candidateAnswer} is not the correct answer.`);
      console.log("Try again please");
    }
  }
  
  console.log(`Your grade is: ${grade}`);
  if(grade < 80){
      console.log(`Your grade is: ${grade}. You have failed this test. `)
  }
  else{
    console.log(`Your grade is:  ${grade}. Congrats, you passed! `);
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Greetings, " + askForName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};