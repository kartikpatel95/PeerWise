var profileModal = document.getElementById("profileModal");
var closeProfile = document.getElementsByClassName("closeProfile")[0];

function openModal(){
  profileModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeProfile.onclick = function() {
    profileModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == profileModal) {
        profileModal.style.display = "none";
    }
}
