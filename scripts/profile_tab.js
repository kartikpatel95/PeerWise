window.onload= function () {
    initBar();
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
    console.log("leaderboard");
}