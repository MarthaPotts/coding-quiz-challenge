let intro = document.querySelector("#intro");
let display = document.querySelector("#display-question");
let titleEl = document.querySelector("#title");
let choicesEl = document.querySelector("#choices");
let outro = document.querySelector("#outro");
let timerId;
let scorebox = document.querySelector("#score-container");

let q = 0;

let startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  intro.style.display = "none";
  display.style.display = "flex";
  timerId = setInterval(tickTock, 1000);
  displayQuestion();
}

function displayQuestion() {
  let question = questions[q].title;
  titleEl.innerHTML = question;
  titleEl.innerHTML = "";

  choicesEl.innerHTML = "";
  titleEl.innerHTML = questions[q].title;
  questions[q].choices.forEach((choice, i) => {
    let choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choicesEl.appendChild(choiceNode);
    choiceNode.onclick = answerClick;
  });
  if (questions.length == 0 || time == 0) {
    stopQuiz();
  }
}

//5 questions = 60 seconds
let time = questions.length * 12;
// let timerId;
let timeEl = document.querySelector("#time");
// timerId = setInterval(tickTock, 1000);
timeEl.innerHTML = time;
let response = document.querySelector("#response");

function answerClick() {
  if (this.value !== questions[q].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    timeEl.innerHTML = time;
    response.innerHTML = "Keep Studying!";
  } else {
    response.innerHTML = "Good job!";
  }

  response.setAttribute("class", "response");
  setTimeout(() => {
    response.setAttribute("class", "response-hide");
  }, 1000);

  if (q == 5) {
    stopQuiz();
  } else {
    q++;
    displayQuestion();
  }
}

function stopQuiz() {
  clearInterval(timerId);
  display.setAttribute("class", "hide");
  outro.style.display = "flex";
  display.style.display = "none";
}

function tickTock() {
  time--;
  timeEl.innerHTML = time;
  if (time <= 0) {
    stopQuiz();
  } else if (q === questions.length) {
    stopQuiz();
  }
}

let finalScoreEl = document.querySelector("#finalScore");
finalScoreEl.innerHTML = time;
initialsEl = document.querySelector("#initials");
// let scorebox = document.querySelector("#score-container");

function saveHighScore() {
  let initials = initialsEl.value.trim();

  if (initials !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    let newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    scorebox.style.display = "flex";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter" || event.key === "13") {
    saveHighScore();
  }
}
submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", saveHighScore);
initialsEl.addEventListener("keyup", checkForEnter);

function getHighScores() {
  let highscores = JSON.parse(window.localStorage.getItem("highscores"));

  highscores.sort((a, b) => {
    return b.score - a.score;
  });

  highscores.forEach((score) => {
    let liTag = document.createElement("li");
    liTag.innerHTML = score.initials + "-" + score.score;
    let list = document.querySelector("#highscores");
    list.appendChild(liTag);
  });
}

function clearScores() {
  window.localStorage.removeItem("highscores");
  // window.location.reload();
}
console.log(clearScores());
let clear = document.querySelector("#clear");
// clear.onclick = clearScores;
clear.addEventListener("click", clearScores);

getHighScores();
