//timer
let timerEl = document.getElementById("timer"); 

//highscore
let score = document.getElementById("highscore"); 

//intro page 
let intro = document.getElementById("intro"); 

//start button 
let startBtn = document.getElementById("start"); 

//questions 
let questionDisplay = document.getElementById("questionsDisplayBox"); 
let question = document.getElementById("title"); 
let choices = document.getElementById("choices"); 
//answers /response 
let rightOrWrong = document.getElementById("response"); 


//end page 
let endDisplay = document.getElementById("outro"); 
let submitBtn = document.getElementById("submit"); 

let finalScore = document.getElementById("finalScore"); 
let initials = document.getElementById("initials"); 

//timer 
let secondsLeft = 75; 
function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft; 
        timerEl.textContent = "time left " + secondsLeft; 
        if(secondsLeft === 0) {
            clearInterval(timerInterval); 
        }
    },1000);
}

//start timer and begin questions 
startBtn.addEventListener("click", function() {
    startQuiz; 
}); 

function startQuiz() {
    intro.style.display = "none"; 
    setTime(); 
    displayQuestion(); 
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex]; 

    question.textContent = currentQuestion.title; 
    choices.innerHTML = ""; 
    currentQuestion.choices.forEach( function( choice, i) {
        choiceNode = document.createElement("button"); 
        choiceNode.setAttribute("class", "choice"); 
        choiceNode.setAttribute("value", choice); 
        choiceNode.textContent = i +1 + "." + choice; 

        choiceNode.onclick = questionClick; 
        choices.appendChild(choiceNode); 
    }); 
}

function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 10; 
        if (time <0) {
            time = 0; 
        }
        timerEl.textContent = time; 
        //incorrect/correct (could make two functions for this); 
        rightOrWrong.textContent = "Nope!"; 
    } else {
        rightOrWrong.textContent = "Good job!"; 
    }
}

//hide feedback, present next Question 

if (currentQuestionIndex === questions.length) {
    quizEnd(); 
} else {
    displayQuestion(); 
}

function quizEnd() {
    //stop time 
    clearInterval(timerEl); 
    //end page 
    endDisplay.style.display = "inline-block"; 
    //end score 
    finalScore.textContent = time; 
    //hide questions 
    questionDisplay.style.display = none; 
}
//update time 
function clockTick() {
    time; 
    timerEl.textContent = time; 
    if (time <= 0) {
        quizEnd(); 
    }
}

function saveHighScore() {
    //get input value 
    let initials = initials.value.trim(); 
    if (initials !== "") {
        //get score 
        var highscores = JSON.parse(window.localStorage.getItem( "highscores")); 
        //format new score for current user 
        var newScore = {
            score: time, 
            initials: initials
        }; 
        //save to LS 
        highscores.push(newScore); 
        window.localStorage.setItem( "highscores", JSON.stringify( highscores ));
        //html page 
        window.location.href = "highscores.html"; 
    }
} 

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighScore(); 
    }
}

submitBtn.onclick = saveHighscore; 
startBtn.onclick = startQuiz; 
initials.onkeyup = checkForEnter; 