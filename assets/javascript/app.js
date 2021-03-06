$(document).ready(function(){
// Objects and Variables
//=====================================================================
//=====================================================================

  var questions = [
    question1 = {
      question: "<p>What is not part of Donald Trump's healthcare plans?</p>",
      answers: ["<div class = 'row wrong'><p>Allowing tax payers to deduct their insurance premiums from their federal taxable income.</p></div>","<div class ='row wrong'><p>A total repeal  of obamacare.</p></div>","<div class = 'row wrong'><p>Require transparency in pricing from healthcare providers.</p></div>", "<div id = 'right' class = 'row'><p>Establish a 2% American Health Improvement tax upon immigrant workers.</p></div>"],
      right: "<div id = 'right' class = 'row'><p>Establish a 2% American Health Improvement tax upon immigrant workers.</p></div>"
    },
    question2= {
      question: "Which Candidate is wishing to lower the corporate tax rate to 15%?",
      answers: ["<div class = 'row wrong'><p>Bernie Sanders</p></div>","<div class ='row wrong'><p>Hillary Clinton</p></div>","<div id = 'right' class = 'row'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>"
    },
    question3 = {
      question: "which candidate wishes to ease unnecessary regulatory burdens on community banks, which provide credit to small business owners and families?",
      answers: ["<div class = 'row wrong'><p>Donald Trump</p></div>","<div id = 'right' class = 'row'><p>Hillary Clinton</p></div>","<div class = 'row wrong'><p>Bernie Sanders</p></div>"],
      right: "<img src = 'assets/images/hillary.jpg'>"
    },
    question4 = {
      question: "Which candidate is against the death penalty?",
      answers: ["<div id = 'right' class = 'row'><p>Bernie Sanders</p></div>","<div  class = 'row wrong'><p>Hillary Clinton</p></div>","<div class = 'row wrong'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/bernie.jpg'>"
    },
    question5 = {
      question: "Which candidate disagrees that the nuclear arms deal with Iran was good for America?",
      answers: ["<div class = 'row wrong'><p>Bernie Sanders</p></div>","<div class = 'row wrong'><p>Hillary Clinton</p></div>","<div id = 'right' class = 'row'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>"
    },

    question6 = {
      question: "Do all of the candidates agree that the federal minimum wage should be increased?",
      answers: ["<div class = 'row wrong'><p>False</p></div>","<div id = 'right' class = 'row'><p>True</p></div>"],
      right: "<img src = 'assets/images/true.jpg'>"
   },
    question7 = {
      question: "Do all of the candidates support the continued use of drone strikes within foreign nations?",
      answers: ["<div class = 'row wrong'><p>False</p></div>","<div id = 'right' class = 'row'><p>True</p></div>"],
      right: "<img src = 'assets/images/true.jpg'>"
    },
    question8 = {
      question: "Which candidate supports the continued monitoring of phone calls and email metadata by the NSA?",
      answers: ["<div class = 'row wrong'><p>Bernie Sanders</p></div>","<div class = 'row wrong'><p>Hillary Clinton</p></div>","<div id = 'right' class = 'row'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>"
    },
    question9 = {
      question: "Does Donald Trump want to increase the United State's military budget?",
      answers: ["<div id = 'right' class = 'row'><p>False</p></div>","<div class = 'row wrong'><p>True</p></div>"],
      right: "<img src = 'assets/images/false.jpg'>",
    },
    question10 = {
      question: "Which candidate is against sending ground troops to fight against ISIS?",
      answers: ["<div class = 'row' id = 'right'><p>Bernie Sanders</p></div>","<div class = 'row wrong'><p>Hillary Clinton</p></div>","<div class = 'row wrong'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/bernie.jpg'>"
    }
  ];

  var qcount= 0; //sets the first question to the 0 index of the questions array
  var guessRight = 0; //starts the player at 0 guesses right,wrong, and unanswered/
  var guessWrong = 0;
  var unanswered = 0;
  var myinterval;

//Functions
//================================================================================================================================================================

  function insertQ() {
    $("#question").html(questions[qcount].question);
    $("#answers").html(questions[qcount].answers);
  }

  function countDown() {
    var i = 15;
    myinterval = setInterval(function() {
    $("#time").html("<p>seconds left: " + i + "</p>");

    if (i === 0) {
        clearInterval(myinterval);
        unanswered++;
        rightImage();
        $('#time').empty();
        qcount++;
        setTimeout(nextQ, 5*1000);
    }
    else {
        i--;
       }
    }, 1000);
  }


  function rightImage(){
    $('#question').append("<p>The correct answer was:</p>");
    $('#answers').html(questions[qcount].right);
  }

  function endOfGame(){
    $('#answers').append('<div class= "row results">Questions guessed right: '+guessRight+'<div>');
    $('#answers').append('<div class= "row results">Questions guessed wrong: '+guessWrong+'<div>');
    $('#answers').append('<div class= "row results">Questions not guessed in time: '+unanswered+'<div>');
    $('#answers').append('<div class = "row results" id = "reset">Retake the quiz</div>');
    $('#reset').on("click",function(){
      qcount= 0;
      guessRight=0;
      guessWrong=0;
      unanswered=0;
      $('#question').empty();
      start();
    });
  }

  function nextQ() {
    clearInterval(myinterval);
    $('#time').empty();
    if (qcount < 10) {
    insertQ();
    countDown();
    clicks();
    }
    else {
      $('#answers').empty();
      if (guessRight >= 7) {
        $('#question').html("Great job. You proved you know your candidates. Take pride that you are a valuable member of democracy.");
        endOfGame();

      }
      else {
        $('#question').html("You may want to brush up on the candidate's stances.");
        endOfGame();
      }
    }
  }

  function clicks(){
    $('.wrong').on("click", function(){
      $('#time').empty();
      console.log("clicked");
      rightImage();
      qcount++;
      guessWrong++;
      clearInterval(myinterval);
      setTimeout(nextQ, 5*1000);
    });
    $('#right').on("click",function(){
      $('#time').empty();
      rightImage();
      qcount++;
      guessRight++;
      clearInterval(myinterval);
      setTimeout(nextQ, 5*1000);
      console.log(qcount);
      console.log(guessRight);

    });
    $('#start').on("click",function(){
      nextQ();
    });
  }

    function start() {
      $('#answers').html('<div class= "row results" id = "start">Start Game</div>');
      clicks();
    }
    start();

});
