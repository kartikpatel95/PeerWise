var userNames = ["student", "student", "student", "student", "student", "student", "student", "student", "student",];
var userScores = [400, 360, 310, 260, 210, 160, 110, 60, 10]

window.onload= function () {
    initBar();
    updateLeaderboard();
    document.getElementById("leaderboard_container").style.display = "none";
}
function showBadge(){
    document.getElementById("leaderboard_container").style.display = "none";
    document.getElementById("badge_container").style.display = null;
    console.log("badge");
}

function showLeaderboard(){
    document.getElementById("badge_container").style.display = "none";
    document.getElementById("leaderboard_container").style.display = null;
    updateLeaderboard();
    console.log("leaderboard");
}

function updateLeaderboard(){
    var leaderboard = document.getElementById("leaderboard_content");
    var userScore = parseInt(sessionStorage.getItem("totalExp"));
    var rankNum = 1;
    var rankIn = false;
    leaderboard.innerHTML = "";
    for(var i = 0; i < 9; i ++){
        var row = document.createElement("tr");
        var rank = document.createElement("td");
        var name = document.createElement("td");
        var score = document.createElement("td");

        if(userScore > userScores[i] && !rankIn){
            addPlayerRank(rankNum, userScore);
            rankNum ++;
            rankIn = true
        }

        rank.innerHTML = rankNum;
        name.innerHTML = userNames[i];
        score.innerHTML = userScores[i];

        row.appendChild(rank);
        row.appendChild(name);
        row.appendChild(score);

        leaderboard.appendChild(row);
        rankNum++;
    }
    if(rankNum == 10){
        addPlayerRank(rankNum, userScore);
    }



}

function addPlayerRank(rankNum, userScore) {
    var leaderboard = document.getElementById("leaderboard_content");
    var playerRow = document.createElement("tr");
    var playerRank = document.createElement("td");
    var playerName = document.createElement("td");
    var playerScore = document.createElement("td");

    playerRank.innerHTML = rankNum;
    playerName.innerHTML = "Group8b";
    playerScore.innerHTML = userScore;

    playerRow.appendChild(playerRank);
    playerRow.appendChild(playerName);
    playerRow.appendChild(playerScore);

    playerRow.id = "player_row";

    leaderboard.appendChild(playerRow);

    document.getElementById("profile_rank").innerHTML = "Rank: #" + rankNum;
}