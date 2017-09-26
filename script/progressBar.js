function move() {
  var progress = document.getElementById("progressbar");
  if (progress.value >= 99){
	alert("Congradulation - Level Up");
	progress.value = 0;
 } else {
	  progress.value = progress.value + 10;
	  
 }
}
  
