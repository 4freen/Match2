window.setInterval("display()",1000);
window.setTimeout("tickTock()",60000);
var completed = 0;

function display() {
	completed++;
	$("#time").html("<p id='circle' align='center'>"+(60-completed)+"<br/>to go..</p>");
}

function tickTock() {
	window.location.href="loser.html";		
}

