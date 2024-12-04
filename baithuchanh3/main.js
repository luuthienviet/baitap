const quizData = [
    {
        question: "What is the most used programing language in 2019?",
        a: "Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Joe Biden",
        c: "Ivan Saladano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "what does HTML stand for?",
        a: "Hypertext Markup language",
        b: "Cascading Style Sheet",
        c: "jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbmitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {
    let answer = underfined;

    answerEls.forEach(function (answerEl) {
        if (answer = answerEl.id){
            answer = answerEl.id;
        }
    });
        return answer;
    }
    function deselectAnswers() {
        answerEls.forEach(function (answerEl){
            answerEl.checked = false;
        });
    }
sumbmitBtn.addEventListener("click", function() {
    const answer = getSelected();
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            resul = document.createElement("h2");
            resul.innerText = 'You answered correctly at $(score)/$(quizData.length) questions.';
            buttonReload = document.createElement("button");
            buttonReload.innerText = "Reload";
            buttonReload.onclick = function () { window.location.reload();}
            quiz.innerHTML = "";
            quiz.append(result);
            quiz.append(buttonReload);
        }
    }
});
