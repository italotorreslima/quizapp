const quizData = [
  {
    question: "Which programming language is most used?",
    a: "C#",
    b: "Python",
    c: "Java",
    d: "JavaScript",
    correct: "b",
  },
  {
    question: "Who invented the World Wide Web?",
    a: "Jeff Bezos",
    b: "Peter Lynch",
    c: "Tim Berners-Lee",
    d: "Steve Jobs",
    correct: "c",
  },
  {
    question: "What is HTTP?",
    a: "A mandatory domain for all websites",
    b: "A digital security certificate",
    c: "The way today's websites use it to track steps on the web",
    d: "A transfer Protocol",
    correct: "d",
  },
  {
    question: "Which operating system most used in the world?",
    a: "Windows",
    b: "MacOs",
    c: "IOS",
    d: "Android",
    correct: "d",
  },
  {
    question: "Which technology was used to create Linux?",
    a: "C",
    b: "Fortran",
    c: "Delphi",
    d: "Cobol",
    correct: "a",
  },
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener("click", () => {
  const answer = getSelected();

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score > quizData.length / 2) {
        quiz.innerHTML = ` <h2 style="color:green">You answered correctly at ${score}/${quizData.length} questions. <button onclick="location.reload()" style="margin-top:2rem">Let's go to the beginning </button></h2>`;
      } else {
        quiz.innerHTML = ` <h2 style="color:red">You answered correctly only ${score}/${quizData.length} questions. <button onclick="location.reload()" style="margin-top:2rem">Let's go to the beginning </button></h2>`;
      }
    }
  }
});
