const quizRB=[
    {
        queston: "1. What is the formula for calculating profit?",
      options: {A:" Revenue - Expenses", B: "Revenue + Expenses", C:" Revenue * Expenses", D:" Expenses - Revenue"},
      correct_option: "A"
    },
    {
        queston: "2. If the cost price of an item is $50, and it is sold for $75, what is the profit percentage?",
        options:  { A:" 25%", B:" 30%", C :"50%", D :"40%"},
        correct_option:"A"
    },
    {
        queston: "3. What is the loss percentage if an item is sold for $90 with a cost price of $120?",
        options:  {A:"20%", B: "25%", C :"30%", D: "15%"},
        correct_option:"C"
    },
    {
        queston: "4. If the selling price is $200 and the profit percentage is 20%, what is the cost price?",
        options:  {A: "$160", B :"$180", C: "$150", D :"$170"},
        correct_option: "B"
    },
    {
        queston: "5. A business incurred expenses of $5000 and generated revenue of $8000. What is the profit?",
        options:  {A: "$3000", B: "$2000", C: "$1000", D: "$500"},
        correct_option: "A"
    },
    {
        queston: "6. If the cost price is $120 and the loss percentage is 15%, what is the selling price?",
        options:  {A: "$102", B: "$105", C: "$110", D: "$115"},
        correct_option: "C"
    },
    {
        queston: "7. What is the formula for calculating net profit?",
        options: {A: "Revenue - Expenses", B: "Revenue + Expenses", C: "Revenue * Expenses", D: "Expenses - Revenue"},
        correct_option: "A"
    },
    {
        queston: "8. If the selling price is $450 and the cost price is $400, what is the profit?",
        options:  {A: "$40", B: "$50", C: "$60", D: "$70"},
        correct_option: "B"
    },
    {
        queston: "9. A product is sold for $1200 with a profit of 20%. What is the cost price?",
        options: {A: "$960", B: "$1000", C: "$1100", D: "$1150"},
        correct_option:"B"
    },
    {
        queston: "10. If the profit percentage is 25% and the selling price is $1250, what is the cost price?",
      options: {A: "$1000", B: "$1050", C: "$1100", D: "$1200"},
      correct_option:"A"
    }
  ]
  


  const questons= document.querySelector(".questons");
const opnContainer = document.getElementById('opnContainer');
const next = document.querySelector('#next');
const quiz = document.getElementById('num1');
const timer = document.getElementById('timer');
const show = document.getElementById('show');
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
        timer.innerHTML = `over`;
    }
}

startTimer(10);




let questioncount = 0;
let score = 0;

// define a problemonage functions

function problemonage(){
    const questionbox = quizRB[questioncount];
    questons.innerHTML = questionbox.queston;

    opnContainer.innerHTML = '';
    Object.keys(questionbox.   options).forEach(function (option) {

        var button = document.createElement('button');
        button.className = '  options';
        button.textContent =  option + ": " + questionbox.  options[option];
        button.onclick = function () { checkAnswer( option); };
        opnContainer.appendChild(button);
    });
}
problemonage();

// define a checkanswer functions

function checkAnswer(selectedoption) {
    var questionbox= quizRB[questioncount];
    if (questionbox. correct_option === selectedoption) {

        score++;

    }
    nextQuestion();
}
// define a next button function and result function
function nextQuestion() {
    questioncount++;
    quiz.innerHTML = `${questioncount}/10`;
    startTimer(30);
    if (questioncount <quizRB.length) {

        problemonage();
    } else {
        show.innerHTML = `
       <h3>your scored${score}/${quizRB.length}</h3>
       <a href="http://127.0.0.1:49675/Daliy%20class/Java%20script/New%20folder/index.html"><button class='btn4' onclick='location.reload()'>Start Again</button></a> `;
        show.classList.remove('hide');
        showResult();
    }
}

function showResult() {


    // alert('Quiz completed! Your score: ' + score + '/' + texts.length);
}

