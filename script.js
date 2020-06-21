var score = 0;
var playing = false;
var time = 30;
var action;
var correctAnswer;
document.getElementById("startButton").onclick = function () {
  if (playing == true) {
    location.reload();
  } else {
    playing = true;
    question();
    document.getElementById("timier").style.display = "inline";
    document.getElementById("startButton").innerHTML = "Restart Game";

    document.getElementById("time").innerHTML = time;
    timeCount();

    document.getElementById("gameOver").style.display = "none";
    document.getElementById("timier").style.backgroundColor = "darkgreen";
  }
};

function timeCount() {
  time = 30;
  action = setInterval(function () {
    time -= 1;
   
    if(time<-10){
        
            
            location.reload();
        
    }
    playing = true;
    document.getElementById("time").innerHTML = time;
    if (time == 8) {
      document.getElementById("timier").style.backgroundColor =
        "rgb(216, 7, 7)";
    }
    if (time == 6) {
      document.getElementById("timier").style.backgroundColor = "darkgreen";
    }
    if (time == 4) {
      document.getElementById("timier").style.backgroundColor =
        "rgb(216, 7, 7)";
    }
    if (time == 2) {
      document.getElementById("timier").style.backgroundColor = "darkgreen";
    }
    if (time<=0){
        document.getElementById("time").innerHTML = 0;
    }
    if (time == 0) {
      clearInterval(action);
      

      playing = false;
      document.getElementById("endScore").innerHTML = score;

      document.getElementById("gameOver").style.display = "flex";
      document.getElementById("timier").style.backgroundColor =
        "rgb(216, 7, 7)";
      hides("correct");
      hides("wrong");
      document.getElementById("startButton").innerHTML = "Start Game";
      
      
    }
  }, 1000);
}

function show(id) {
  document.getElementById(id).style.display = "inline";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
function hides(id) {
  document.getElementById(id).style.visibility = "hidden";
}
function shows(id) {
  document.getElementById(id).style.visibility = "visible";
}

function question() {
  var x = Math.round(Math.random() * 100) + 1;
  var y = Math.round(Math.random() * 100) + 1;
  correctAnswer = x * y;
  randomid = Math.round(Math.random() * 3) + 1;
  console.log(randomid);
  document.getElementById("opt" + randomid).innerHTML = correctAnswer;
  document.getElementById("question").innerHTML = x + " * " + y;
  for (let i = 1; i <= 4; i++) {
    if (i !== randomid) {
      do {
        wrongAnswer =
          (Math.round(Math.random() * 100) + 1) *
          (Math.round(Math.random() * 100) + 1);
      } while (correctAnswer == wrongAnswer);
      document.getElementById("opt" + i).innerHTML = wrongAnswer;
    }
  }
}
document.getElementById("opt1").onclick = function () {
  if (this.innerHTML == correctAnswer) {
    score++;
    document.getElementById("scoreNumber").innerHTML = score;
    shows("correct");
    setTimeout(function () {
      hides("correct");
    }, 1500);
    hides("wrong");
    question();
    timeCount();
    location.reload()
  } else {
    shows("wrong");
    setTimeout(function () {
      hides("wrong");
    }, 1500);
    hides("correct");
  }
};
document.getElementById("opt2").onclick = function () {
  if (this.innerHTML == correctAnswer) {
    score++;
    document.getElementById("scoreNumber").innerHTML = score;
    shows("correct");
    setTimeout(function () {
      hides("correct");
    }, 1500);
    hides("wrong");
    question();
    document.getElementById("timier").style.backgroundColor =
    "darkgreen";
    timeCount();
  } else {
    shows("wrong");
    setTimeout(function () {
      hides("wrong");
    }, 1500);
    hides("correct");
  }
};
document.getElementById("opt3").onclick = function () {
  if (this.innerHTML == correctAnswer) {
    score++;
    document.getElementById("scoreNumber").innerHTML = score;
    shows("correct");
    setTimeout(function () {
      hides("correct");
    }, 1500);
    hides("wrong");
    question();
    document.getElementById("timier").style.backgroundColor =
    "darkgreen";
    timeCount();
  } else {
    shows("wrong");
    setTimeout(function () {
      hides("wrong");
    }, 1500);
    hides("correct");
  }
};
document.getElementById("opt4").onclick = function () {
  if (this.innerHTML == correctAnswer) {
    score++;
    document.getElementById("scoreNumber").innerHTML = score;
    shows("correct");
    setTimeout(function () {
      hides("correct");
    }, 1500);

    hides("wrong");
    question();
    document.getElementById("timier").style.backgroundColor =
    "darkgreen";
    timeCount();
  } else {
    shows("wrong");
    setTimeout(function () {
      hides("wrong");
    }, 1500);
    hides("correct");
  }
};
