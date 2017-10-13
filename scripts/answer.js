var index = 0;

// Get the modal
var modal = document.getElementById('answerModal');

// Get the button that opens the modal
var btn = document.getElementById("questionButton");
btn.disabled = true;

var ansBtn = document.getElementById("answerButton");
ansBtn.disabled = true;

var closeBtn = document.getElementById("closeModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var correctAnswer = document.getElementById('correct-answer-container');
correctAnswer.style.display = "none";

var radiosQ = document.getElementsByName('gender');
for (var i = 0, length = radiosQ.length; i < length; i++) {
  radiosQ[i].onclick = function() {
    btn.disabled = false;
  }
}

var radiosAns = document.getElementsByName('answer');
for (var i = 0, length = radiosAns.length; i < length; i++) {
  radiosAns[i].onclick = function() {
    ansBtn.disabled = false;
  }
}

if(!(sessionStorage.getItem(answerKey) === null)){
  var indices = sessionStorage.getItem(answerKey);
  var indicesArray = indices.split(',');
  var arrayLength = indicesArray.length;
  console.log(indicesArray);
  for (var i = 0; i < arrayLength; i++) {
    index = parseInt(indicesArray[i]);
    removeQuestion();
  }
}

// When the user clicks the button, open the modal
btn.onclick = function() {
    var question;
    var answers;
    var answer_index;

    for (var i = 0, length = radiosAns.length; i < length; i++) {
      radiosAns[i].disabled = false;
    }
    for (var i = 0, length = radiosQ.length; i < length; i++) {
        if (radiosQ[i].checked) {
            // do whatever you want with the checked radio
            index = parseInt(radiosQ[i].value);
            //question = radiosQ[i].nextSibling.data;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    switch (index) {
      case 1:
          question = document.getElementById("q1").innerHTML;
          answers = q1;
          GLOBAL_INDEX_OF_ANS = a1;
          break;
      case 2:
          question = document.getElementById("q2").innerHTML;
          answers = q2;
          GLOBAL_INDEX_OF_ANS = a2;
          break;
      case 3:
          question = document.getElementById("q3").innerHTML;
          answers = q3;
          GLOBAL_INDEX_OF_ANS = a3;
          break;
      case 4:
          question = document.getElementById("q4").innerHTML;
          answers = q4;
          GLOBAL_INDEX_OF_ANS = a4;
          break;
      case 5:
          question = document.getElementById("q5").innerHTML;
          answers = q5;
          GLOBAL_INDEX_OF_ANS = a5;
          break;
      case 6:
          question = document.getElementById("q6").innerHTML;
          answers = q6;
          GLOBAL_INDEX_OF_ANS = a6;
          break;
      case 7:
          question = document.getElementById("q7").innerHTML;
          answers = q7;
          GLOBAL_INDEX_OF_ANS = a7;
          break;
      case 8:
          question = document.getElementById("q8").innerHTML;
          answers = q8;
          GLOBAL_INDEX_OF_ANS = a8;
          break;
      case 9:
          question = document.getElementById("q9").innerHTML;
          answers = q9;
          GLOBAL_INDEX_OF_ANS = a9;
          break;
    }

    GLOBAL_ANS = answers[GLOBAL_INDEX_OF_ANS];

    var answerA = document.getElementById('answerA');
    var answerB = document.getElementById('answerB');
    var answerC = document.getElementById('answerC');
    var answerD = document.getElementById('answerD');

    document.getElementById('question').innerHTML = question;
    answerA.innerHTML = answers[0];
    answerB.innerHTML = answers[1];
    answerC.innerHTML = answers[2];
    answerD.innerHTML = answers[3];

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    resetAnsForm();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetAnsForm();
    }
}

var answerBtn = document.getElementById("answerButton");

answerBtn.onclick = function() {
  var answerindex = 0;
  for (var i = 0, length = radiosAns.length; i < length; i++) {
      if (radiosAns[i].checked) {
          // do whatever you want with the checked radio
          answerindex = radiosAns[i].value;
          // only one radio can be logically checked, don't check the rest
          break;
      }
  }
  if (GLOBAL_INDEX_OF_ANS == (parseInt(answerindex)-1)){
    //alert("Correct Answer!");
    document.getElementById("result-text").innerHTML = "Correct!";
    //modal.style.display = "none";
    move();
    addAnsweredCorrectly();
  }else{
    //alert("Incorrect! Answer is: " + GLOBAL_ANS);
    document.getElementById("result-text").innerHTML = "Incorrect!";
  }
  document.getElementById("correct-answer-text").innerHTML = "Answer is: " + GLOBAL_ANS;
  ansBtn.disabled = true;
  correctAnswer.style.display = "block";
  addAnswered();
  addAnsweredIndex();
  removeQuestion();
  updateLeaderboard();

  for (var i = 0, length = radiosAns.length; i < length; i++) {
    radiosAns[i].disabled = true;
  }
}

function checkAnswerA()
{
  checkAnswer(0);
}

function checkAnswerB()
{
  checkAnswer(1);
}

function checkAnswerC()
{
  checkAnswer(2);
}

function checkAnswerD()
{
  checkAnswer(3);
}

function checkAnswer(answer)
{
  if(GLOBAL_INDEX_OF_ANS == answer)
  {
    alert("Correct Answer!");
  }else{
    alert("Incorrect Answer");
  }
}

function resetAnsForm()
{
  correctAnswer.style.display = "none";
  ansBtn.disabled = true;
  document.getElementById("answerForm").reset();
}

function addAnsweredIndex(){
  if(sessionStorage.getItem(answerKey) === null){
    sessionStorage.setItem(answerKey, index.toString());
  }else{
    var indices = sessionStorage.getItem(answerKey);
    indices += ',' + index;
    sessionStorage.setItem(answerKey, indices);
  }
}

function removeQuestion(){
  //radiosQ[index-1].checked = false;
  //radiosQ[index-1].disabled = true;
  var questionText;
  var btn_to_disable;
  switch (index) {
    case 1:
        questionText = document.getElementById("q1");
        btn_to_disable = document.getElementById("btn_q1");
        $("#btn_q1").removeAttr("onclick");
        break;
    case 2:
        questionText = document.getElementById("q2");
        btn_to_disable = document.getElementById("btn_q2");
        $("#btn_q2").removeAttr("onclick");
        break;
    case 3:
        questionText = document.getElementById("q3");
        btn_to_disable = document.getElementById("btn_q3");
        $("#btn_q3").removeAttr("onclick");
        break;
    case 4:
        questionText = document.getElementById("q4");
        btn_to_disable = document.getElementById("btn_q4");
        $("#btn_q4").removeAttr("onclick");
        break;
    case 5:
        questionText = document.getElementById("q5");
        btn_to_disable = document.getElementById("btn_q5");
        $("#btn_q5").removeAttr("onclick");
        break;
    case 6:
        questionText = document.getElementById("q6");
        btn_to_disable = document.getElementById("btn_q6");
        $("#btn_q6").removeAttr("onclick");
        break;
    case 7:
        questionText = document.getElementById("q7");
        btn_to_disable = document.getElementById("btn_q7");
        $("#btn_q7").removeAttr("onclick");
        break;
    case 8:
        questionText = document.getElementById("q8");
        btn_to_disable = document.getElementById("btn_q8");
        $("#btn_q8").removeAttr("onclick");
        break;
    case 9:
        questionText = document.getElementById("q9");
        btn_to_disable = document.getElementById("btn_q9");
        $("#btn_q9").removeAttr("onclick");
        break;
  }
  questionText.style.color = 'lightgrey';
  btn_to_disable.classList.remove("answerOptions");
  btn_to_disable.classList.add("notAnswerOptions");
  btn.disabled = true;
}

closeBtn.onclick = function() {
  resetAnsForm();
  modal.style.display = "none";
}


// When the user clicks the button, open the modal
function viewQuestion(value) {
    var question;
    var answers;
    var answer_index;
    index = parseInt(value);

    switch (index) {
      case 1:
          question = document.getElementById("q1").innerHTML;
          answers = q1;
          GLOBAL_INDEX_OF_ANS = a1;
          break;
      case 2:
          question = document.getElementById("q2").innerHTML;
          answers = q2;
          GLOBAL_INDEX_OF_ANS = a2;
          break;
      case 3:
          question = document.getElementById("q3").innerHTML;
          answers = q3;
          GLOBAL_INDEX_OF_ANS = a3;
          break;
      case 4:
          question = document.getElementById("q4").innerHTML;
          answers = q4;
          GLOBAL_INDEX_OF_ANS = a4;
          break;
      case 5:
          question = document.getElementById("q5").innerHTML;
          answers = q5;
          GLOBAL_INDEX_OF_ANS = a5;
          break;
      case 6:
          question = document.getElementById("q6").innerHTML;
          answers = q6;
          GLOBAL_INDEX_OF_ANS = a6;
          break;
      case 7:
          question = document.getElementById("q7").innerHTML;
          answers = q7;
          GLOBAL_INDEX_OF_ANS = a7;
          break;
      case 8:
          question = document.getElementById("q8").innerHTML;
          answers = q8;
          GLOBAL_INDEX_OF_ANS = a8;
          break;
      case 9:
          question = document.getElementById("q9").innerHTML;
          answers = q9;
          GLOBAL_INDEX_OF_ANS = a9;
          break;
    }

    GLOBAL_ANS = answers[GLOBAL_INDEX_OF_ANS];

    var answerA = document.getElementById('answerA');
    var answerB = document.getElementById('answerB');
    var answerC = document.getElementById('answerC');
    var answerD = document.getElementById('answerD');

    document.getElementById('question').innerHTML = question;
    answerA.innerHTML = answers[0];
    answerB.innerHTML = answers[1];
    answerC.innerHTML = answers[2];
    answerD.innerHTML = answers[3];

    for (var i = 0, length = radiosAns.length; i < length; i++) {
      radiosAns[i].disabled = false;
    }

    var btn_to_disable;

    btn_to_disable = document.getElementById("btn_answerA");
    btn_to_disable.classList.remove("notAnswerOptions");
    btn_to_disable.classList.remove("notAnswerOptionsTrue");
    btn_to_disable.classList.add("answerOptions");
    $('#btn_answerA').attr('onClick','submitAnswer(1)');

    btn_to_disable = document.getElementById("btn_answerB");
    btn_to_disable.classList.remove("notAnswerOptions");
    btn_to_disable.classList.remove("notAnswerOptionsTrue");
    btn_to_disable.classList.add("answerOptions");
    $('#btn_answerB').attr('onClick','submitAnswer(2)');

    btn_to_disable = document.getElementById("btn_answerC");
    btn_to_disable.classList.remove("notAnswerOptions");
    btn_to_disable.classList.remove("notAnswerOptionsTrue");
    btn_to_disable.classList.add("answerOptions");
    $('#btn_answerC').attr('onClick','submitAnswer(3)');

    btn_to_disable = document.getElementById("btn_answerD");
    btn_to_disable.classList.remove("notAnswerOptions");
    btn_to_disable.classList.remove("notAnswerOptionsTrue");
    btn_to_disable.classList.add("answerOptions");
    $('#btn_answerD').attr('onClick','submitAnswer(4)');



    modal.style.display = "block";
}

function submitAnswer(value) {
  var answerindex = value;
  if (GLOBAL_INDEX_OF_ANS == (parseInt(answerindex)-1)){
    //alert("Correct Answer!");
    document.getElementById("result-text").innerHTML = "Correct!";
    //modal.style.display = "none";
    move();
    addAnsweredCorrectly();
  }else{
    //alert("Incorrect! Answer is: " + GLOBAL_ANS);
    document.getElementById("result-text").innerHTML = "Incorrect!";
  }
  document.getElementById("correct-answer-text").innerHTML = "Answer is: " + GLOBAL_ANS;
  ansBtn.disabled = true;
  correctAnswer.style.display = "block";
  addAnswered();
  addAnsweredIndex();
  removeQuestion();
  updateLeaderboard();

  for (var i = 0, length = 4; i < length; i++) {
    var btn_to_disable;
    if (i != (parseInt(answerindex)-1)){
      switch (i) {
        case 0:
            btn_to_disable = document.getElementById("btn_answerA");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptions");
            $("#btn_answerA").removeAttr("onclick");
            break;
        case 1:
            btn_to_disable = document.getElementById("btn_answerB");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptions");
            $("#btn_answerB").removeAttr("onclick");
            break;
        case 2:
            btn_to_disable = document.getElementById("btn_answerC");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptions");
            $("#btn_answerC").removeAttr("onclick");
            break;
        case 3:
            btn_to_disable = document.getElementById("btn_answerD");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptions");
            $("#btn_answerD").removeAttr("onclick");
            break;
      }
    }else{
      switch (i) {
        case 0:
            btn_to_disable = document.getElementById("btn_answerA");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptionsTrue");
            $("#btn_answerA").removeAttr("onclick");
            break;
        case 1:
            btn_to_disable = document.getElementById("btn_answerB");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptionsTrue");
            $("#btn_answerB").removeAttr("onclick");
            break;
        case 2:
            btn_to_disable = document.getElementById("btn_answerC");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptionsTrue");
            $("#btn_answerC").removeAttr("onclick");
            break;
        case 3:
            btn_to_disable = document.getElementById("btn_answerD");
            btn_to_disable.classList.remove("answerOptions");
            btn_to_disable.classList.add("notAnswerOptionsTrue");
            $("#btn_answerD").removeAttr("onclick");
            break;
      }
    }
  }
}
