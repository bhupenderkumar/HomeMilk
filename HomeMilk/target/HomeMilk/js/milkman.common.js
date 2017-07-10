/**
 * 
 */

function isNumeric(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	console.log($(event.target).text())
	var regex = /[0-9]|\ /;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault)
			theEvent.preventDefault();
	}
}
function getDate() {
	var date = new Date();
	var year = date.getUTCFullYear();
	var month = date.getUTCMonth() + 1;
	var day = date.getUTCDate();
	var dateString = year + "-" + month + "-" + day;
}