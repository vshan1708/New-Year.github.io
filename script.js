/* script.js */

// 1. Fireworks for Finale Page
function createFirework() {
    const container = document.getElementById('fireworks');
    if(!container) return;
    const f = document.createElement('div');
    f.style.position = 'absolute';
    f.style.left = Math.random() * 100 + 'vw';
    f.style.top = Math.random() * 100 + 'vh';
    f.style.width = '4px'; f.style.height = '4px';
    f.style.background = 'gold'; f.style.borderRadius = '50%';
    f.style.boxShadow = '0 0 10px 2px gold';
    f.style.animation = 'fadeOut 1.5s forwards';
    container.appendChild(f);
    setTimeout(() => f.remove(), 1500);
}
if (document.getElementById('fireworks')) { setInterval(createFirework, 600); }

// 2. Password Logic (Used in password.html)
function checkPassword() {
    const passInput = document.getElementById('pass');
    const errorMsg = document.getElementById('err');
    if (!passInput) return;
    
    const p = passInput.value.toLowerCase();
    if(p === '185') { 
        window.location.href = 'gallery.html'; 
    } else { 
        errorMsg.innerText = "Try again, baby! 😘"; 
    }
}

// 3. Quiz Logic (Used in quiz.html)
const questionPool = [
    { q: "Who is more dramatic? 😝", f: "Correct or not... You’re still my favorite person ❤️" },
    { q: "Who says 'sorry' first after a fight? 🕊️", f: "We both know we just want to cuddle again. 🥺" },
    { q: "Who is the better navigator? 🗺️", f: "Doesn't matter, we're lost in each other anyway! 🥰" },
    { q: "Who fell in love first? 💘", f: "A race where we both won. 🏁❤️" },
    { q: "Who is more likely to stay up late? 🌙", f: "Talking to you is always worth the lost sleep. 😴" },
    { q: "Who gives the best gifts? 🎁", f: "Having you is the best gift I ever got. 🥺" },
    { q: "Who takes the longest to get ready? 💄", f: "Take your time, you're always worth the wait. 😍" }
];

let selectedQuestions = [];
let currentStep = 0;

function initQuiz() {
    const qLabel = document.getElementById('quiz-question');
    if (!qLabel) return; // Exit if not on quiz page

    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 5);
    displayQuestion();
}

function displayQuestion() {
    const currentData = selectedQuestions[currentStep];
    document.getElementById('progress').innerText = `Question ${currentStep + 1} of 5`;
    document.getElementById('quiz-question').innerText = currentData.q;
    document.getElementById('answer-buttons').style.display = 'block';
    document.getElementById('feedback-area').style.display = 'none';
}

function handleAnswer(choice) {
    const currentData = selectedQuestions[currentStep];
    document.getElementById('feedback-text').innerText = currentData.f;
    document.getElementById('feedback-area').style.display = 'block';
    document.getElementById('answer-buttons').style.display = 'none';

    if (currentStep === selectedQuestions.length - 1) {
        document.getElementById('next-button').innerText = "Finish Quiz 💕";
    }
}

function loadNextQuestion() {
    if (currentStep < selectedQuestions.length - 1) {
        currentStep++;
        displayQuestion();
    } else {
        window.location.href = "wish.html";
    }
}

// Start quiz on load
window.onload = initQuiz;