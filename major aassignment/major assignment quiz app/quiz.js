
function enter() {
   userName = document.getElementById("nameInput").value;
   document.getElementById("userName").innerText = userName;
   document.querySelector('.quiz-container').style.display = 'none';
   document.getElementById('quizPage').style.display = 'block';
}

// difine a questions

const quizDB = [
   {
      question: "A pipe can fill a tank in 5 hours. If it is opened for 2 hours, how much of the tank will be filled?'",
      options: { A: '1/10', B: '1/5', C: '2/5', D: '2/10' },
      correctOption: 'C'
   },
   {
      question: 'Two pipes can fill a tank in 6 hours. If one pipe is opened and the tank is half filled in 6 hours, how long will the second pipe take to fill the remaining half?',
      options: { A: '3 hours', B: '4 hours', C: '6 hours', D: '9 hours' },
      correctOption: 'A'
   },
   {
      question: 'A pipe can fill a tank in 8 hours. If a leakage is discovered, the pipe is kept open for 12 hours, and then it is closed. How many hours will the tank take to be filled completely?',
      options: { A: '12 hours', B: '16 hours', C: '18 hours', D: '24 hours' },
      correctOption: 'B'
   },
   {
      question: 'A cistern can be filled by two pipes A and B in 4 hours and 5 hours respectively. If both pipes are opened together, how long will it take to fill the cistern?',
      options: { A: '1.5 hours', B: '2 hours', C: '2.5 hours', D: '3 hours' },
      correctOption: 'C'
   },
   {
      question: 'If two pipes can fill a tank in 8 hours and 12 hours respectively, how many hours will it take to fill the tank if both pipes are opened together?',
      options: { A: '3.2 hours', B: '4.8 hours', C: '6 hours', D: '7.2 hours' },
      correctOption: 'B'
   },
   {
      question: 'A pipe can fill a tank in 10 hours. After half the tank is filled, three more similar pipes are opened. What is the total time taken to fill the tank completely?',
      options: { A: '2 hours', B: '3 hours', C: '4 hours', D: '5 hours' },
      correctOption: 'C'
   },
   {
      question: 'A pipe can fill a tank in 15 hours. The tank has an outlet which can empty it in 20 hours. If both the pipe and the outlet are opened together, how long will it take to fill the tank?',
      options: { A: '30 hours', B: '50 hours', C: '60 hours', D: '75 hours' },
      correctOption: 'B'
   },
   {
      question: 'If a pipe can fill a tank in 6 hours, and another pipe can empty the full tank in 8 hours, how long will it take to fill the tank if both pipes are opened together?',
      options: { A: '12 hours', B: '16 hours', C: '24 hours', D: '48 hours' },
      correctOption: 'C'
   },
   {
      question: 'A tank has three pipes A, B, and C. A and B can fill it in 20 hours, while C can empty it in 15 hours. If the pipes A, B, and C are opened together, in how many hours will the tank be filled?',
      options: { A: '10 hours', B: '12 hours', C: '15 hours', D: '18 hours' },
      correctOption: 'B'
   },
   {
      question: 'A pipe can fill a tank in 12 hours. It is opened for 5 hours, and then another pipe is opened, which can empty the tank in 8 hours. If both pipes are opened together, in how many hours will the tank be filled?',
      options: { A: '7.2 hours', B: '8 hours', C: '9 hours', D: '10 hours' },
      correctOption: 'D'
   },
];

// define a all variables
const questions = document.querySelector(".questions");
const optionsContainer = document.getElementById('optionsContainer');
const next = document.querySelector('#next');
const quiz = document.getElementById('num1');
const timer = document.getElementById('timer');
const show = document.getElementById('show');
const main = document.getElementById('main-div');
let timeleft;
let timeinterval;

// Function to start the timer
function startTimer(duration) {
    timeleft = duration;
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(updatetime, 3000);
}

// Function to update the timer
function updatetime() {
    if (timeleft > 0) {
        timer.textContent = `${timeleft}`;
        timeleft--;
    } else {
        clearInterval(timeinterval);
        timer.innerHTML = `times up`;
    }
}

startTimer(10);




let questioncount = 0;
let score = 0;

// define a loadquestions functions

function loadQuestion() {
   const questionlist = quizDB[questioncount];
   questions.innerHTML = questionlist.question;
   optionsContainer.innerHTML = '';
   Object.keys(questionlist.options).forEach(function (option) {

      var button = document.createElement('button');
      button.className = 'options';
      button.textContent = option + ": " + questionlist.options[option];
      button.onclick = function () { checkAnswer(option); };
      optionsContainer.appendChild(button);
   });
}
loadQuestion();

// define a checkanswer functions

function checkAnswer(selectedoption) {
   var questionlist = quizDB[questioncount];
   if (questionlist.correctOption === selectedoption) {

      score++;

   }
   nextQuestion();
}
// define a next button function and result function
function nextQuestion() {
   questioncount++;
   quiz.innerHTML = `${questioncount}/10`;
   startTimer(30);
   if (questioncount < quizDB.length) {

      loadQuestion();
   } else {
       show.innerHTML=`
       <h3>your scored${score}/${quizDB.length}</h3>
       <a href="http://127.0.0.1:49675/Daliy%20class/Java%20script/New%20folder/index.html"><button class='btn4' onclick='location.reload()'>Start Again</button></a> `;
       show.classList.remove('hide');
      showResult();
   }
}

function showResult() {
   

   // alert('Quiz completed! Your score: ' + score + '/' + questions.length);
}





































