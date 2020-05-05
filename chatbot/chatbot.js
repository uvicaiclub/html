/*
chatbot.js 
For use with www.uvicaiclub.ca
Created by the UVic AI Club
Nov 26, 2019
*/
alert("Welcome to the UVic AI Club Chatbot!\n\nIf Chatbot does not recognise your input, type in a proper response and click \"Add Response\".\n\nThis will train Chatbot to correctly respond to dialog.\n\nThank you and enjoy!");
var previous_user_input = document.getElementById("previous_user_input");

function Submit() {
	var user_string = $("#user_string").val();
	previous_user_input.innerHTML = user_string;

	$.post("../chatbot/chatbot.php", {user_string: user_string},
	function(data) {
		$('#response').html(data); //Send to html
		$('#chat')[0].reset();
	});
}


function AddResponse() {
	var user_string = $("#user_string").val();
	var previous_user_string = previous_user_input.innerHTML;

	$.post("../chatbot/addResponse.php", {previous_user_string: previous_user_string, user_string: user_string},
	function(data) {
		$('#response').html(data); //Send to html
		$('#chat')[0].reset();
	});
}

