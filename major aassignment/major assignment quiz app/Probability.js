// difine a questions

let quizpro = [
    {
      Question: 'What is the probability of rolling a sum of 7 on a pair of six-sided dice?',
      answers: { A: '1/6', B: '1/8', C: '1/12', D: '1/36' },
      correctanswer: 'D'
    },
    {
       Question: 'In a deck of 52 cards, what is the probability of drawing a red card?',
       answers: { A: '1/4', B: '1/2', C: '26/52', D: '13/52' },
       correctanswer:'C'
    },
    {
       Question: 'If you flip a fair coin three times, what is the probability of getting exactly two heads?',
       answers: { A: '1/2', B: '1/4', C: '3/8', D: '1/8' },
       correctanswer: 'C'
    },
    {
       Question: 'A bag contains 5 red balls and 3 green balls. If you randomly select two balls from the bag without replacement, what is the probability that both balls are red?',
       answers: { A: '5/24', B: '5/14', C: '5/12', D: '5/8' },
       correctanswer:'A'
    },
    {
       Question: 'If you roll a fair six-sided die, what is the probability of rolling an odd number?',
       answers:{ A: '1/6', B: '1/3', C: '1/2', D: '2/3' },
       correctanswer: 'B'
    },
    {
       Question: 'In a lottery, there are 20 tickets and 2 prizes. What is the probability of winning a prize if you buy one ticket?',
       answers: { A: '1/10', B: '1/15', C: '1/20', D: '1/5' },
       correctanswer:'D'
    },
    {
       Question: 'If you draw a card from a standard deck without replacement, what is the probability of drawing a face card (king, queen, or jack)?',
       answers: { A: '1/4', B: '1/13', C: '3/13', D: '1/3' },
       correctanswer:'C'
    },
    {
       Question: 'A spinner is divided into 6 equal sections numbered 1 through 6. What is the probability of spinning an even number?',
       answers: { A: '1/3', B: '1/2', C: '1/6', D: '2/3' },
       correctanswer: 'B'
    },
    {
       Question: 'If you have a bag with 8 blue marbles and 4 red marbles, what is the probability of randomly selecting a red marble?',
       answers: { A: '1/2', B: '1/3', C: '1/4', D: '1/6' },
       correctanswer:'A'
    },
    {
       Question: 'In a group of 30 people, what is the probability that at least two people share the same birthday?',
       answers: { A: '70%', B: '80%', C: '90%', D: '95%' },
       correctanswer: 'C'
    },];
 
   //  / define a all variables
    
    const  QuestionS = document.querySelector(".Question");
    const answerContainer = document.getElementById('answerContainer');
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

 
 
 // define a callquestions functions

 
 function callquestions () {
    const questiontrack = quizpro[questioncount];
    QuestionS.innerHTML =  questiontrack.Question;
 
    answerContainer.innerHTML = '';
    Object.keys( questiontrack.answers).forEach(function (answer) {
 
       var button = document.createElement('button');
       button.className = ' answers';
       button.textContent = answer + ": " +  questiontrack.answers[answer];
       button.onclick = function () { checkAnswer(answer); };
       answerContainer.appendChild(button);
    });
 }
 callquestions() 
  // define a checkanswer functions
 function checkAnswer(selectedoption) {
    var questiontrack = quizpro[questioncount];
    if (questiontrack.correctanswer === selectedoption) {
 
       score++;
 
    }
    nextQuestion();
 }
 // define a next button function and result function
 function nextQuestion() {
    questioncount++;
    quiz.innerHTML = `${questioncount}/10`;
    startTimer(30);
    if (questioncount < quizpro.length) {
 
        callquestions();
    } else {
        show.innerHTML=`
        <h3>your scored${score}/${quizpro.length}</h3>
        <a href="http://127.0.0.1:49675/Daliy%20class/Java%20script/New%20folder/index.html"><button class='btn4' onclick='location.reload()'>Start Again</button></a> `;
        show.classList.remove('hide');
       showResult();
    }
 }
 
 function showResult() {
    
 
   //  alert('Quiz completed! Your score: ' + score + '/' + questions.length);
 }