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
      question: "which candidate wishes to ease unnecessary regulatory burdens on community banks, which provide credit to small business owners and families looking to invest in their futures?",
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
      right: "<img src = 'assets/images/seriousTrump.jpg'>",
    },
    question10 = {
      question: ""
    }
  ];

  var qcount= 0;
  var guessRight = 0;
  var guessWrong = 0;
  var unanswered = 0;
  var myinterval;

//Functions
//================================================================================================================================================================

  function insertQ() {
    $("#question").html(questions[qcount].question);
    $("#answers").html(questions[qcount].answers);
  }
  insertQ();
  console.log(insertQ());

  function countDown() {
    var i = 10;
    myinterval = setInterval(function() {
    $("#time").html("<p>seconds left: " + i + "</p>");

    if (i === 0) {
        clearInterval();
        //call your function
    }
    else {
        i--;
       }
    }, 1000);
}

  countDown();

function rightImage(){
  $('#answers').html(questions[qcount].right);
}
  function nextQ() {
    clearInterval(myinterval);
    $('#time').empty();
    insertQ();
    countDown();
    clicks();
  }

  function clicks(){
    $('.wrong').on("click", function(){
      console.log("clicked");
      rightImage();
      qcount++;
      guessWrong++;
      clearInterval(myinterval);
      setTimeout(nextQ, 5*1000);
      // $('#time').empty();
      // insertQ();
      // countDown();
      // clicks();
    });
    $('#right').on("click",function(){
      rightImage();
      qcount++;
      guessRight++;
      clearInterval(myinterval);
      if(qcount < 10) {
      setTimeout(nextQ, 5*1000);
      }
      console.log(qcount);
      console.log(guessRight);
      // $('#time').empty();
      // insertQ();
      // countDown();
      // clicks();
      if (qcount === 7) {
        console.log("if activated");
        if (guessRight >= 5) {
          $('#question').html("Great job. You proved you know your candidates. Take pride that you are a valuable member of democracy");
          console.log("activated");
        }
        else {
          $('#question').html("You may want to brush up on the candidate's platforms before voting in the election");
        }
      }
    });
  }
  clicks();

  //conditionals
  //================================================================================================================================================================
  if (qcount === 7) {
    console.log("if activated");
    if (guessRight >= 7) {
      $('#question').html("Great job. You proved you know your candidates. Take pride that you are a valuable member of democracy");
      console.log("activated");
    }
    else {
      $('#question').html("You may want to brush up on the candidate's platforms before voting in the election");
    }
  }
});
