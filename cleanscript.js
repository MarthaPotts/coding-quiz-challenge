//stores question/answer sets into a VLA made up of objects: arrays in objects inside an array; accessible via indices and name:value;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      title: "The condition in an if/else statement is enclosed within_____:",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
  
    {
      title: "Arrays in JavaScript can used to store:",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above",
    },
  
    {
      title: "String values must be enclosed within_____when being assigned to variables",
      choices: ["commas", "curly braces", "quotes", "parentheses"],
      answer: "quotes",
    },
  
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      answer: "console.log",
    },
  ];
//addEventListener() has an optional useCapture parameter; why are we using preventDefault() instead? (default is bubbling); 


  //organize features into sections, each section having tasks; 
  // Timer: variables/functions/eventListener


  // start quiz function: display welcome menu, eventListener on startBtn: onclick call timer and display questions/answers


  //display questions: loop through VLA.object with Outer for loop and access `answers` w/inner for loop.
  //present each question, create btns with answer options, onclick selection, logic to choose answer; 


  //localStorage: setItem/getItem: can create a function to do that setScore/getScore

  //exit page: save initials and highscore (score = timeleft on Timer); reset btn, submitBtn, textField, onSubmit event



  