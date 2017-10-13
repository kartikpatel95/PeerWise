function move() {
  var progress = document.getElementById("progressbar");
  var progressbar_profile = document.getElementById("progressbar_profile");

  if(sessionStorage.getItem("exp") === null){
    sessionStorage.setItem("exp", "0");
  }
  if(sessionStorage.getItem("lvl") === null){
    sessionStorage.setItem("lvl", "1");
  }
  if(sessionStorage.getItem("totalExp") == null){
      sessionStorage.setItem("totalExp", "0");
  }
  progress.value = parseInt(sessionStorage.getItem("exp"));
  var level = parseInt(sessionStorage.getItem("lvl"));

  if (progress.value >= level*100){
	   alert("Congratulations - Level Up");
	   progress.value = 0;
     level = parseInt(sessionStorage.getItem("lvl")) + 1
     sessionStorage.setItem("lvl", level.toString());
     sessionStorage.setItem("exp", progress.value.toString());
     initBar();
 } else {
	  progress.value = progress.value + 50;
    sessionStorage.setItem("exp", progress.value.toString());
    progressbar_profile.value = parseInt(sessionStorage.getItem("exp"))
    setTimeout(initBar, 100);
 }

    var total_exp = parseInt(sessionStorage.getItem("totalExp"));
    total_exp += 50;
    sessionStorage.setItem("totalExp", total_exp.toString());
}

function initBar(){

  if(sessionStorage.getItem("exp") === null){
    sessionStorage.setItem("exp", "0");
  }
  if(sessionStorage.getItem("lvl") === null){
    sessionStorage.setItem("lvl", "1");
  }
  if(sessionStorage.getItem("answeredCorrectly") === null){
    sessionStorage.setItem("answeredCorrectly", "0");
  }
  if(sessionStorage.getItem("answered") === null){
    sessionStorage.setItem("answered", "0");
  }
  if(sessionStorage.getItem("written") === null){
    sessionStorage.setItem("written", "0");
  }
  if(sessionStorage.getItem("totalExp") == null){
      sessionStorage.setItem("totalExp", "0");
  }

  var progress = document.getElementById("progressbar");
  var progressbar_profile = document.getElementById("progressbar_profile");
  var level = parseInt(sessionStorage.getItem("lvl"));
  var answered = parseInt(sessionStorage.getItem("answered"));
  var written = parseInt(sessionStorage.getItem("written"));
  var exp = parseInt(sessionStorage.getItem("exp"));
  var answeredCorrectly = parseInt(sessionStorage.getItem("answeredCorrectly"));

  progress.max = (level*100) + '';
  progressbar_profile.max = (level*100) + '';

  if (exp >= level*100){
     alert("Congradulation - Level Up");
     progress.value = 0;
     level = parseInt(sessionStorage.getItem("lvl")) + 1;
     sessionStorage.setItem("lvl", level.toString());
     sessionStorage.setItem("exp", progress.value.toString());

     progress.max = (level*100) + '';
     progressbar_profile.max = (level*100) + '';
 }

  progress.value = parseInt(sessionStorage.getItem("exp"))
  progressbar_profile.value = parseInt(sessionStorage.getItem("exp"))

  var level = parseInt(sessionStorage.getItem("lvl"));

  if(level >= 1){
    document.getElementById("levelImg").src = "images/awards/star1.png";
    document.getElementById("levelImg2").src = "images/stars/star1.JPG";
  }

  if(level >= 2){
    unlock_achievement_1();
    document.getElementById("levelImg").src = "images/awards/star2.png";
    document.getElementById("levelImg2").src = "images/stars/star2.JPG";
  }

  if(level >= 3){
    document.getElementById("levelImg").src = "images/awards/star3.png";
    document.getElementById("levelImg2").src = "images/stars/star3.JPG";
  }

  if(level >= 4){
    document.getElementById("levelImg").src = "images/awards/star4.png";
    document.getElementById("levelImg2").src = "images/stars/star4.JPG";
  }

  if(level >= 5){
    document.getElementById("levelImg").src = "images/awards/star4.png";
    document.getElementById("levelImg2").src = "images/stars/star5.JPG";
  }

  if(level >= 6){
    document.getElementById("levelImg").src = "images/awards/star4.png";
    document.getElementById("levelImg2").src = "images/stars/star6.JPG";
  }

  if(written >= 1){
    unlock_achievement_2();
  }

  if(written >= 5){
    unlock_achievement_4();
  }

  if(answeredCorrectly >= 1){
    unlock_achievement_3();
  }

  if(answered >= 18){
    unlock_achievement_8();
  }

}

function addAnswered()
{
  if(sessionStorage.getItem("answered") === null){
    sessionStorage.setItem("answered", "0");
  }
  var answered = parseInt(sessionStorage.getItem("answered")) + 1;
  sessionStorage.setItem("answered", answered.toString());

  if(answered == 18){
    alert("Unlocked Achievement - Answered All Question!")
  }

}

function addAnsweredCorrectly()
{
  if(sessionStorage.getItem("answeredCorrectly") === null){
    sessionStorage.setItem("answeredCorrectly", "0");
  }
  var answered = parseInt(sessionStorage.getItem("answeredCorrectly")) + 1;
  sessionStorage.setItem("answeredCorrectly", answered.toString());

  if(answered == 1){
    alert("Unlocked Achievement - Answered First Question Correctly!")
  }
}

function addWritten()
{
  if(sessionStorage.getItem("written") === null){
    sessionStorage.setItem("written", "0");
  }
  var written = parseInt(sessionStorage.getItem("written")) + 1;
  sessionStorage.setItem("written", written.toString());

  if(written == 1){
    alert("Unlocked Achievement - Written First Question!")
  }

  if(written == 5){
    alert("Unlocked Achievement - Written Five Question!")
  }
}

function unlock_achievement_1()
{
  var lock = document.getElementById("lock_1");
  lock.style.display = "none";
  var achievement = document.getElementById("achievement_1");
  achievement.style.opacity = 1;
}

function unlock_achievement_2()
{
  var lock = document.getElementById("lock_2");
  lock.style.display = "none";
  var achievement = document.getElementById("achievement_2");
  achievement.style.opacity = 1;
}

function unlock_achievement_3()
{
  var lock = document.getElementById("lock_3");
  lock.style.display = "none";
  var achievement = document.getElementById("achievement_3");
  achievement.style.opacity = 1;
}

function unlock_achievement_4()
{
  var lock = document.getElementById("lock_4");
  lock.style.display = "none";
  var achievement = document.getElementById("achievement_4");
  achievement.style.opacity = 1;
}

function unlock_achievement_8()
{
  var lock = document.getElementById("lock_8");
  lock.style.display = "none";
  var achievement = document.getElementById("achievement_8");
  achievement.style.opacity = 1;
}
