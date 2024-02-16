const quizage = [
    {
        text: " What is the current age of John?",
        answers:  {A:"25",B:  "30",C: "35",D: "40"},
        realanswer: "B"
    },
    {
        text:  " Five years ago, Alice was three times as old as Bob. If Alice is 25 now, how old is Bob?",
        answers: {A:"5",B:  "8", C:"10",D: "12"},
        realanswer: "C"
    },
    {
        text: " Mary is 15 years older than Tom. If Tom is 20, how old is Mary?",
        answers:  {A:"30",B:  "35",C: "40",D: "45"},
        realanswer: "B"
    },
    {
        text: " Alex is twice as old as Bella. If Bella is 18, how old is Alex?",
        answers:{A:"30",B:  "36",C: "42",D: "48"},
        realanswer: "B"
    },
    {
        text: " Ten years from now, Sarah will be twice as old as Mike. If Mike is 25, how old is Sarah?",
        answers: {A:"35",B:  "40",C: "45",D: "50"},
        realanswer: "B"
    },
    {
        text: " If the sum of Jane's age and Peter's age is 50, and Jane is 5 years older than Peter, how old is Peter?",
        answers: {A:"20",B:  "25",C: "30",D: "35"},
        realanswer: "B"
    },
    {
        text: " A father is four times as old as his son. If the father is 36, how old is his son?",
        answers:  {A:"6",B:  "9",C: "12",D: "15"},
        realanswer:"B"
    },
    {
        text: " In two years, Mia will be half as old as Jake. If Jake is 30, how old is Mia?",
        answers: {A:"13",B:  "15",C: "17",D: "19"},
        realanswer: "B"
    },
    {
        text: " If the average age of a family of four is 30 years, what is the sum of their ages?",
        answers: {A:"90",B:  "100",C: "110",D: "120"},
        realanswer:"D"
    },
    {
        text: " Fifteen years ago, Sam was three times as old as Kate. If Kate is 25 now, how old is Sam?",
        answers:  { A: "40",B: "45", C: "50", D: "55"},
       realanswer:  "A"
    }
];

const texts = document.querySelector(".texts");
const ansContainer = document.getElementById('ansContainer');
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
        timer.innerHTML = `times up`;
    }
}

startTimer(10);




let questioncount = 0;
let score = 0;

// define a  category functions

function category(){
    const questiondata = quizage[questioncount];
    texts.innerHTML = questiondata.text;

    ansContainer.innerHTML = '';
    Object.keys(questiondata.  answers).forEach(function (answer) {

        var button = document.createElement('button');
        button.className = ' answers';
        button.textContent = answer + ": " + questiondata. answers[ answer];
        button.onclick = function () { checkAnswer(answer); };
        ansContainer.appendChild(button);
    });
}
category();


// define a checkanswer functions
function checkAnswer(selectedoption) {
    var questiondata = quizage[questioncount];
    if (questiondata.realanswer === selectedoption) {

        score++;

    }
    nextQuestion();
}
// define a next button function and result function
function nextQuestion() {
    questioncount++;
    quiz.innerHTML = `${questioncount}/10`;
    startTimer(30);
    if (questioncount < quizage.length) {

        category();
    } else {
        show.innerHTML = `
       <h3>your scored${score}/${quizage.length}</h3>
       <a href="http://127.0.0.1:49675/Daliy%20class/Java%20script/New%20folder/index.html"><button class='btn4' onclick='location.reload()'>Start Again</button></a> `;
        show.classList.remove('hide');
        showResult();
    }
}

function showResult() {


    // alert('Quiz completed! Your score: ' + score + '/' + texts.length);
}

