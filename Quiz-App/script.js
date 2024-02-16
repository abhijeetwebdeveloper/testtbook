let currentCategory = ''; // वर्तमान कैटेगरी को रखने के लिए एक वैरिएबल

function initializeQuiz() {
    // यहां आपको क्विज़ को शुरू करने के लिए कोड लिखना होगा
    // उदाहरण के लिए, आपको वर्तमान कैटेगरी के लिए सवालों को लोड करना होगा
}

function startCategory(category) {
    currentCategory = category;
    initializeQuiz(); // क्विज़ को शुरू करने के लिए इनिशियलाइज़ क्विज़ फ़ंक्शन को कॉल करें
}

// एक उदाहरण कॉल करने के लिए:
startCategory('Pipes and Cisterns');




function startCategory(category) {
    currentCategory = category;
    initializeQuiz();
}

// Example: calling the function with one of the categories
startCategory('Pipes and Cisterns');

function initializeQuiz() {
    // You can use a switch statement or if-else ladder to handle different categories
    switch (currentCategory) {
        case 'Pipes and Cisterns':
            // Load questions for Pipes and Cisterns
            loadPipesAndCisternsQuestions();
            break;
        case 'Probability':
            // Load questions for Probability
            loadProbabilityQuestions();
            break;
        case 'Problems on Age':
            // Load questions for Problems on Age
            loadProblemsOnAgeQuestions();
            break;
        case 'Profit and Loss':
            // Load questions for Profit and Loss
            loadProfitAndLossQuestions();
            break;
        default:
            // Handle the case if an unknown category is provided
            console.log('Unknown category');
            break;
    }
}

// Example functions for loading questions for each category
function loadPipesAndCisternsQuestions() {
    // Load questions for Pipes and Cisterns category
}

function loadProbabilityQuestions() {
    // Load questions for Probability category
}

function loadProblemsOnAgeQuestions() {
    // Load questions for Problems on Age category
}

function loadProfitAndLossQuestions() {
    // Load questions for Profit and Loss category
}
function loadPipesAndCisternsQuestions() {
    const pipesAndCisternsQuestions = [
        {
            text: 'A pipe can fill a tank in 5 hours. If it is opened for 2 hours, how much of the tank will be filled?',
            options: { A: '1/10', B: '1/5', C: '2/5', D: '2/10' },
            correctOption: 'C'
        },
        // Add more questions as needed
    ];

    return pipesAndCisternsQuestions;
}











let currentQuestionIndex = 0;
let score = 0;
let timer = quizDuration;

function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timer = quizDuration;

    switch (currentCategory) {
        case 'Pipes and Cisterns':
            loadPipesAndCisternsQuestions();
            break;
        case 'Probability':
            loadProbabilityQuestions();
            break;
        case 'Problems on Age':
            loadProblemsOnAgeQuestions();
            break;
        case 'Profit and Loss':
            loadProfitAndLossQuestions();
            break;
        default:
            console.log('Unknown category');
            break;
    }

    updateQuizHeader();
    loadQuestions();
}

function loadPipesAndCisternsQuestions() {
    const pipesAndCisternsQuestions = [
        { text: 'A pipe can fill a tank in 5 hours. If it is opened for 2 hours, how much of the tank will be filled?', options: { A: '1/10', B: '1/5', C: '2/5', D: '2/10' }, correctOption: 'C' },
        { text: 'Two pipes can fill a tank in 6 hours. If one pipe is opened and the tank is half filled in 6 hours, how long will the second pipe take to fill the remaining half?', options: { A: '3 hours', B: '4 hours', C: '6 hours', D: '9 hours' }, correctOption: 'A' },
        // Add more questions as needed
    ];

    setQuestions(pipesAndCisternsQuestions);
}

function loadProbabilityQuestions() {
    const probabilityQuestions = [
        { text: 'What is the probability of rolling a sum of 7 on a pair of six-sided dice?', options: { A: '1/6', B: '1/8', C: '1/12', D: '1/36' }, correctOption: 'D' },
        { text: 'In a deck of 52 cards, what is the probability of drawing a red card?', options: { A: '1/4', B: '1/2', C: '26/52', D: '13/52' }, correctOption: 'C' },
        // Add more questions as needed
    ];

    setQuestions(probabilityQuestions);
}

function loadProblemsOnAgeQuestions() {
    const problemsOnAgeQuestions = [
        { text: 'The sum of the ages of a father and his son is 45 years. If the father is 25 years older than his son, what are their ages?', options: { A: '20 and 25', B: '22 and 23', C: '30 and 15', D: 'None of the above' }, correctOption: 'C' },
        { text: 'Ten years ago, the father was seven times as old as his son. If the son is 25 years old now, how old is the father?', options: { A: '50', B: '60', C: '70', D: '80' }, correctOption: 'B' },
        // Add more questions as needed
    ];

    setQuestions(problemsOnAgeQuestions);
}

function loadProfitAndLossQuestions() {
    const profitAndLossQuestions = [
        { text: 'A man buys a shirt for $50 and sells it for $80. What is his profit percentage?', options: { A: '30%', B: '40%', C: '50%', D: '60%' }, correctOption: 'C' },
        { text: 'A shopkeeper buys a toy for $20 and sells it for $30. What is his profit percentage?', options: { A: '20%', B: '30%', C: '40%', D: '50%' }, correctOption: 'B' },
        // Add more questions as needed
    ];

    setQuestions(profitAndLossQuestions);
}

function setQuestions(questions) {
    localStorage.setItem('questions', JSON.stringify(questions));
}

function getQuestionsForCategory() {
    const storedQuestions = localStorage.getItem('questions');
    return JSON.parse(storedQuestions);
}

function loadQuestions() {
    const questions = getQuestionsForCategory();
    console.log(questions);
}

initializeQuiz();





























<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>

    <section id="homePage">
        <h2>Select Categories</h2>
        <button id="btn1" onclick="initializeQuiz('pipesCisterns')">Pipes and Cisterns</button>
        <button id="btn2" onclick="initializeQuiz('probability')">Probability</button>
        <button id="btn3" onclick="initializeQuiz('problemsAge')">Problems on Age</button>
        <button id="btn4" onclick="initializeQuiz('profitLoss')">Profit and Loss</button>
    </section>

    <div id="quiz-container">
        <!-- Quiz content will be displayed here -->
    </div>

    <script>
        function initializeQuiz(category) {
            currentCategory = category;
            currentQuestionIndex = 0;
            score = 0;
            timer = quizDuration;

            switch (currentCategory) {
                case 'pipesCisterns':
                    loadPipesAndCisternsQuestions();
                    break;
                case 'probability':
                    loadProbabilityQuestions();
                    break;
                case 'problemsAge':
                    loadProblemsOnAgeQuestions();
                    break;
                case 'profitLoss':
                    loadProfitAndLossQuestions();
                    break;
                default:
                    console.log('Unknown category');
                    break;
            }

            updateQuizHeader();
            loadQuestions();
        }

        // ... (rest of your JavaScript code)

        // Initialize the quiz when the page loads
        window.onload = function () {
            // initializeQuiz('pipesCisterns'); // You can set a default category here if needed
        };
    </script>

</body>
</html>
