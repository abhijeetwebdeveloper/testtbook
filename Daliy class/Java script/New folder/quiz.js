

function enter() {
  userName = document.getElementById("nameInput").value;
  document.getElementById("userName").innerText = userName;
  document.querySelector('.quiz-container').style.display = 'none';
  document.getElementById('quizPage').style.display = 'block';
  initializeQuiz();
}








var currentCategory;
var currentQuestion = 0;
var score = 0;

var questions = {
  pipes: [
    {
      text: 'A pipe can fill a tank in 5 hours. If it is opened for 2 hours, how much of the tank will be filled?',
      options: { A: '1/10', B: '1/5', C: '2/5', D: '2/10' },
      correctOption: 'C'
    },
    {
      text: 'Two pipes can fill a tank in 6 hours. If one pipe is opened and the tank is half filled in 6 hours, how long will the second pipe take to fill the remaining half?',
      options: { A: '3 hours', B: '4 hours', C: '6 hours', D: '9 hours' },
      correctOption: 'A'
    },
    {
      text: 'A pipe can fill a tank in 8 hours. If a leakage is discovered, the pipe is kept open for 12 hours, and then it is closed. How many hours will the tank take to be filled completely?',
      options: { A: '12 hours', B: '16 hours', C: '18 hours', D: '24 hours' },
      correctOption: 'B'
    },
    {
      text: 'A cistern can be filled by two pipes A and B in 4 hours and 5 hours respectively. If both pipes are opened together, how long will it take to fill the cistern?',
      options: { A: '1.5 hours', B: '2 hours', C: '2.5 hours', D: '3 hours' },
      correctOption: 'C'
    },
    {
      text: 'If two pipes can fill a tank in 8 hours and 12 hours respectively, how many hours will it take to fill the tank if both pipes are opened together?',
      options: { A: '3.2 hours', B: '4.8 hours', C: '6 hours', D: '7.2 hours' },
      correctOption: 'B'
    },
    {
      text: 'A pipe can fill a tank in 10 hours. After half the tank is filled, three more similar pipes are opened. What is the total time taken to fill the tank completely?',
      options: { A: '2 hours', B: '3 hours', C: '4 hours', D: '5 hours' },
      correctOption: 'C'
    },
    {
      text: 'A pipe can fill a tank in 15 hours. The tank has an outlet which can empty it in 20 hours. If both the pipe and the outlet are opened together, how long will it take to fill the tank?',
      options: { A: '30 hours', B: '50 hours', C: '60 hours', D: '75 hours' },
      correctOption: 'B'
    },
    {
      text: 'If a pipe can fill a tank in 6 hours, and another pipe can empty the full tank in 8 hours, how long will it take to fill the tank if both pipes are opened together?',
      options: { A: '12 hours', B: '16 hours', C: '24 hours', D: '48 hours' },
      correctOption: 'C'
    },
    {
      text: 'A tank has three pipes A, B, and C. A and B can fill it in 20 hours, while C can empty it in 15 hours. If the pipes A, B, and C are opened together, in how many hours will the tank be filled?',
      options: { A: '10 hours', B: '12 hours', C: '15 hours', D: '18 hours' },
      correctOption: 'B'
    },
    {
      text: 'A pipe can fill a tank in 12 hours. It is opened for 5 hours, and then another pipe is opened, which can empty the tank in 8 hours. If both pipes are opened together, in how many hours will the tank be filled?',
      options: { A: '7.2 hours', B: '8 hours', C: '9 hours', D: '10 hours' },
      correctOption: 'D'
    },
  ],
  // Define questions for each category
  probability: [
    {
      text: 'What is the probability of rolling a sum of 7 on a pair of six-sided dice?',
      options: { A: '1/6', B: '1/8', C: '1/12', D: '1/36' },
      correctOption: 'D'
    },
    {
      text: 'In a deck of 52 cards, what is the probability of drawing a red card?',
      options: { A: '1/4', B: '1/2', C: '26/52', D: '13/52' },
      correctOption: 'C'
    },
    {
      text: 'If you flip a fair coin three times, what is the probability of getting exactly two heads?',
      options: { A: '1/2', B: '1/4', C: '3/8', D: '1/8' },
      correctOption: 'C'
    },
    {
      text: 'A bag contains 5 red balls and 3 green balls. If you randomly select two balls from the bag without replacement, what is the probability that both balls are red?',
      options: { A: '5/24', B: '5/14', C: '5/12', D: '5/8' },
      correctOption: 'A'
    },
    {
      text: 'If you roll a fair six-sided die, what is the probability of rolling an odd number?',
      options: { A: '1/6', B: '1/3', C: '1/2', D: '2/3' },
      correctOption: 'B'
    },
    {
      text: 'In a lottery, there are 20 tickets and 2 prizes. What is the probability of winning a prize if you buy one ticket?',
      options: { A: '1/10', B: '1/15', C: '1/20', D: '1/5' },
      correctOption: 'D'
    },
    {
      text: 'If you draw a card from a standard deck without replacement, what is the probability of drawing a face card (king, queen, or jack)?',
      options: { A: '1/4', B: '1/13', C: '3/13', D: '1/3' },
      correctOption: 'C'
    },
    {
      text: 'A spinner is divided into 6 equal sections numbered 1 through 6. What is the probability of spinning an even number?',
      options: { A: '1/3', B: '1/2', C: '1/6', D: '2/3' },
      correctOption: 'B'
    },
    {
      text: 'If you have a bag with 8 blue marbles and 4 red marbles, what is the probability of randomly selecting a red marble?',
      options: { A: '1/2', B: '1/3', C: '1/4', D: '1/6' },
      correctOption: 'A'
    },
    {
      text: 'In a group of 30 people, what is the probability that at least two people share the same birthday?',
      options: { A: '70%', B: '80%', C: '90%', D: '95%' },
      correctOption: 'C'
    },],
  problemOnAge: [{
    text: 'The sum of the ages of a father and his son is 45 years. If the father is 25 years older than his son, what are their ages?',
    options: { A: '20 and 25', B: '22 and 23', C: '30 and 15', D: 'None of the above' },
    correctOption: 'C'
  },
  {
    text: 'Ten years ago, the father was seven times as old as his son. If the son is 25 years old now, how old is the father?',
    options: { A: '50', B: '60', C: '70', D: '80' },
    correctOption: 'B'
  },
  {
    text: 'The present age of a father is three times that of his son. If the sum of their ages is 60 years, find their ages.',
    options: { A: '45 and 15', B: '48 and 12', C: '50 and 10', D: '55 and 5' },
    correctOption: 'A'
  },
  {
    text: 'The average age of a group of 10 people is 30 years. If one person aged 40 joins the group, what will be the new average age?',
    options: { A: '31', B: '32', C: '33', D: '34' },
    correctOption: 'B'
  },
  {
    text: 'Three years ago, the average age of a family of 5 members was 26 years. What is the present average age of the family?',
    options: { A: '27', B: '28', C: '29', D: '30' },
    correctOption: 'B'
  },
  {
    text: 'The ratio of the present age of A to B is 5:3. If the age of A is 25 years, find the age of B.',
    options: { A: '15', B: '18', C: '20', D: '22' },
    correctOption: 'C'
  },
  {
    text: 'The age of a father is twice the sum of the ages of his two children. If the total age of the family is 48 years, what is the age of the father?',
    options: { A: '30', B: '32', C: '34', D: '36' },
    correctOption: 'D'
  },
  {
    text: 'The ratio of the ages of A and B is 4:5. If the age of A is 16, find the age of B.',
    options: { A: '15', B: '20', C: '25', D: '30' },
    correctOption: 'C'
  },
  {
    text: 'The sum of the ages of a mother and her daughter is 40 years. If the ratio of their ages is 4:1, find their ages.',
    options: { A: '32 and 8', B: '36 and 4', C: '28 and 12', D: '30 and 10' },
    correctOption: 'A'
  },
  {
    text: 'Ten years ago, a mother was three times as old as her daughter. If the present age of the daughter is 20 years, find the present age of the mother.',
    options: { A: '40', B: '50', C: '60', D: '70' },
    correctOption: 'B'
  },],
  profitLoss: [{
    text: 'A man buys a shirt for $50 and sells it for $80. What is his profit percentage?',
    options: { A: '30%', B: '40%', C: '50%', D: '60%' },
    correctOption: 'C'
  },
  {
    text: 'A shopkeeper buys a toy for $20 and sells it for $30. What is his profit percentage?',
    options: { A: '20%', B: '30%', C: '40%', D: '50%' },
    correctOption: 'B'
  },
  {
    text: 'A bookshop bought a book for $15 and sold it for $20. What is the profit percentage?',
    options: { A: '20%', B: '25%', C: '30%', D: '33.33%' },
    correctOption: 'C'
  },
  {
    text: 'If the cost price of an item is $80 and it is sold for $100, what is the profit percentage?',
    options: { A: '15%', B: '20%', C: '25%', D: '30%' },
    correctOption: 'B'
  },
  {
    text: 'A mobile phone is bought for $500 and sold for $600. What is the profit percentage?',
    options: { A: '10%', B: '15%', C: '20%', D: '25%' },
    correctOption: 'C'
  },
  {
    text: 'If the cost price of a shirt is $30 and it is sold for $40, what is the profit percentage?',
    options: { A: '25%', B: '30%', C: '33.33%', D: '40%' },
    correctOption: 'C'
  },
  {
    text: 'A vendor bought vegetables for $200 and sold them for $250. What is the profit percentage?',
    options: { A: '15%', B: '20%', C: '25%', D: '30%' },
    correctOption: 'B'
  },
  {
    text: 'If the cost price of a watch is $120 and it is sold for $150, what is the profit percentage?',
    options: { A: '20%', B: '25%', C: '30%', D: '35%' },
    correctOption: 'B'
  },
  {
    text: 'A trader sold a bicycle for $900, incurring a loss of 10%. What is the cost price of the bicycle?',
    options: { A: '$810', B: '$900', C: '$990', D: '$1000' },
    correctOption: 'A'
  },
  {
    text: 'If an item is sold for $75 with a loss of 25%, what is its cost price?',
    options: { A: '$80', B: '$90', C: '$100', D: '$125' },
    correctOption: 'D'
  },]
};

function startQuiz(category) {
  currentCategory = category;
  currentQuestion = 0;
  score = 0;


  // Load the first question
  loadQuestion();
}

function loadQuestion() {
  var questionContainer = document.getElementById('questionContainer');
  var optionsContainer = document.getElementById('optionsContainer');
  var currentQuestionData = questions.pipes[currentQuestion];
  document.getElementById("details").style.display = "none";
  document.getElementById("quizPage").style.display = 'block';

  questionContainer.innerHTML = currentQuestionData.text;

  optionsContainer.innerHTML = '';
  Object.keys(currentQuestionData.options).forEach(function (option) {
    var button = document.createElement('button');
    button.className = 'options';
    button.textContent = option + ": " + currentQuestionData.options[option];
    button.onclick = function () { checkAnswer(option); };
    optionsContainer.appendChild(button);
  });

  highlightSelectedOption();
}


function checkAnswer(selectedoption) {
  var currentQuestionData = questions.pipes[currentQuestion];
  if (currentQuestionData.correctOption === selectedoption) {
    score++;
  }
  nextQuestion();
}

function highlightSelectedOption() {
  var options = document.querySelectorAll('.options');
  // options.forEach(function (option, index) {
  //   option.style.backgroundColor = index === currentQuestion ? '#007BFF' : '#fff';
  // option.style.color = index === currentQuestion ? '#fff' : '#000';
  // });
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.pipes.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  alert('Quiz completed! Your score: ' + score + '/' + questions.length);

  var quizResult = {
    name: '',
    totalTime: '',
    totalQuestions: value,
    attemptedQuestions: value,
    correctAnswers: value,
    wrongAnswers: value,
    scorePercentage: value,
  };
  function updateResultDetails() {
    document.getElementById('participant-name').innerText = quizResult.name;
    document.getElementById('total-time').innerText = quizResult.totalTime;
    document.getElementById('total-questions').innerText = quizResult.totalQuestions;
    document.getElementById('attempted-questions').innerText = quizResult.attemptedQuestions;
    document.getElementById('correct-answers').innerText = quizResult.correctAnswers;
    document.getElementById('wrong-answers').innerText = quizResult.wrongAnswers;
    document.getElementById('score-percentage').innerText = quizResult.scorePercentage + '%';
  }

  
  updateResultDetails();

  // // // Reset and go back to home section
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('quizPage').style.display = 'none';
  //  // JavaScript code to update quiz result details

}
document.getElementById('start-again').addEventListener('click', function () {
  
  console.log('Start the quiz again');
});


document.getElementById('go-to-home').addEventListener('click', function () {
  
  console.log('Go to Home');
});