/*
chatbot.js 
for the UVic AI Club website.
Created by Debrah Wyatt
Nov 26, 2019
*/

//Needed to initiaite the submit button
var button = document.getElementById("submit");

//Used when Chatbot has no good response
var unknown_responses = ["I'm sorry, I don't know how to respond to that.",
"No one's ever said that to me before, I don't know how to respond.",
"Please add a response for me by clicking the \"Add Response\" button."];

//So Chatbot doesn't use the same unknown_response consecutively
var last_unknown;

//Clicking this button runs the script
button.onclick = function() {

	//Save references to input and output text
	var response = document.getElementById("response");
	var user_input = document.getElementById("user_input");

	//Extracts the user string
	var user_string = user_input.value;

	//Used to store the output
	var output = "";

	
	/*
	//This begins the algorithm that Chatbot will use
	*/

	//If no input is found, maintain current response.
	if (user_string == ""){
		return;
	}

	//The rest of the code goes is here.

	//Generate unknown responses (duplicate response impossible)
	var current_unknown = Math.floor(Math.random() * unknown_responses.length);
	while(last_unknown == current_unknown){
		current_unknown = Math.floor(Math.random() * unknown_responses.length);
	}
	last_unknown = current_unknown;
	output = unknown_responses[current_unknown];		


	//SHOW THE RESPONSE ON SCREEN
	response.innerHTML = output;
	
	//Clear the user input field
	user_input.value = "";
}
