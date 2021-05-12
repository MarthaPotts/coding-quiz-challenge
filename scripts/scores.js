// function printHighScores(){
//     //get scores from LS 
//     var highscores = JSON.parse(window.localStorage.getItem("highscores")); 
//     highscores.sort(function(a,b) {
//         return b.score - a.score; 
//     }); 
//     //sort 
//     highscores.forEach(function(score) {
//         var liTag = document.createElement("li"); 
//         liTag.textContent = score.initials + " - " + score.score
//     //display
//     var olEl = document.getElementById("highscores"); 
//     olEl.appendChild(liTag); 
//   }); 
// }

// function clearHighscores() {
//     window.localStorage.removeItem("highscores"); 
//     window.location.reload(); 
// }

// document.getElementById("clear").onclick = clearHighscores; 
// //run when page loads 
// printHighScores(); 