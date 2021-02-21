var currentQuestion = 1
var intro = document.querySelector(".intro");
var q1 = document.querySelector(".question1");
var q2 = document.querySelector(".question2");
var q3 = document.querySelector(".question3");
var q4 = document.querySelector(".question4");
var q5 = document.querySelector(".question5");
var conclusion = document.querySelector(".conclusion");

    var timer = document.querySelector(".timer"); 

    var secondsLeft = 75; 
    function setTime() {
        var timerInterval = setInterval(
            function(){secondsLeft --;
        timer.textContent = "time left " + secondsLeft;
    if(secondsLeft === 0){
        clearInterval(timerInterval);
        //timer.textContent = "";
    }
},1000)
};
document.querySelector(".start").addEventListener("click", function() {
    startQuiz();
}); 

function startQuiz() {
    intro.style.display ="none";
    setTime();
    displayQuestion();
}

    function displayQuestion(){
        var question = questions[0]
        var questionTitle = document.querySelector("#title");
        questionTitle.textContent=question.title
     }
