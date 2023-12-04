const questionArray = [
    {

    question: "Which is the largest animal in the world",
    answers: [
        { text: "shark", correct: false },
        { text: "BlueWhale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Girrafe", correct: false },
            ]
    },
    {
        question: "Which is the largest desert in the world",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Antartica", correct: true },
            { text: "sahara", correct: false },
            { text: "gobi", correct: false },
                ]
    },
    {
        question: "Which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
                ]

    }
];

const question = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let scrore = 0;

function startQuiz ()  {
    let currentQuestionIndex = 0;
    let scrore = 0;
    nextBtn.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion () {
    let currentQuestion = questionArray[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question 
}

currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
});