$(document).ready(function(){
  var questions = [
    question1 = {
      question: "<p>What is not part of Donald Trump's healthcare plans?</p>",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>Allowing tax payers to deduct their insurance premiums from their federal taxable income.</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>A total repeal  of obamacare.</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Require transparency in pricing from healthcare providers.</p></div>","<div id = 'right' class = 'row col-md-4'><p>Establish a 2% American Health Improvement tax upon immigrant workers.</p></div>"]
    },
    question2= {
      question: "Which Candidate is wishing to lower the corporate tax rate to 15%?",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>Bernie Sanders</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Hillary Clinton</p></div>","<div id = 'right' class = 'row col-md-4'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>"
    },
    question3 = {
      question: "which candidate wishes to ease unnecessary regulatory burdens on community banks, which provide credit to small business owners and families looking to invest in their futures?",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>Donald Trump</p></div>","<div id = 'right' class = 'row col-md-4'><p>Hillary Clinton</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Bernie Sanders</p></div>"],
      right: "<img src = 'assets/images/hillary.jpg'>"
    },
    question4 = {
      question: "Which candidate is against the death penalty?",
      answers: ["<div id = 'right' class = 'row col-md-4'><p>Bernie Sanders</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Hillary Clinton</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/bernie.jpg'>"
    },
    question5 = {
      question: "Which candidate disagrees that the nuclear arms deal with Iran was good for America?",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>Bernie Sanders</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Hillary Clinton</p></div>","<div id = 'right' class = 'row col-md-4'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>"
    },

    question6 = {
      question: "Do all of the candidates agree that the federal minimum wage should be increased?",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>False</p></div>","<div id = 'right' class = 'row col-md-4'><p>True</p></div>"],
      right: "<img src = 'assets/images/true.jpg'>"
   },
    question7 = {
      question: "Do all of the candidates support the continued use of drone strikes within foreign nations?",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>False</p></div>","<div id = 'right' class = 'row col-md-4'><p>True</p></div>"],
      right: "<img src = 'assets/images/true.jpg'>"
    },
    question8 = {
      question: "Which candidate supports the continued monitoring of phone calls and email metadata by the NSA?",
      answers: ["<div id = 'wrong' class = 'row col-md-4'><p>Bernie Sanders</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>Hillary Clinton</p></div>","<div id = 'right' class = 'row col-md-4'><p>Donald Trump</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>"
    },
    question9 = {
      question: "Does Donald Trump want to increase the United State's military budget?",
      answers: ["<div id = 'right' class = 'row col-md-4'><p>False</p></div>","<div id = 'wrong' class = 'row col-md-4'><p>True</p></div>"],
      right: "<img src = 'assets/images/seriousTrump.jpg'>",
    },
    question10 = {
      question: ""
    }
  ];

  var qcount= 0;

  function insertQ() {
    $("#question").html(questions[qcount].question);
    $("#answers").html(questions[qcount].answers);
  }
  insertQ();
  console.log(insertQ());


  function countDown() {
    var i = 10;
    var myinterval = setInterval(function() {
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
});
