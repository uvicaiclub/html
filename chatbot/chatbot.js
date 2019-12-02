/*
chatbot.js 
for the UVic AI Club website.
Created by Debrah Wyatt
Nov 26, 2019
*/

//Initialize buttons
var enter_button = document.getElementById("enter");
var add_button = document.getElementById("add");

//Initialize text fields
var response = document.getElementById("response");
var user_input = document.getElementById("user_input");

//Used to store the output
var output = "";

//Used when Chatbot has no good response
var unknown_responses = ["I'm sorry, I don't know how to respond to that.",
"No one's ever said that to me before, I don't know how to respond.",
"Please add a response for me by clicking the \"Add Response\" button."];

var blank_responses = ["The strong silent type, eh?",
"Perhaps you should write something first...",
"Is there something on your mind?"];

//So Chatbot doesn't use the same unknown_response consecutively
var last_unknown;

//Filters the user string into word set
function filter() {
}

//Clicking this button runs the memory script
add_button.onclick = function() {
	output = "This button doesn't work, yet...";		

	//SHOW THE RESPONSE ON SCREEN
	response.innerHTML = output;
}

//Clicking this button runs response script
enter_button.onclick = function() {

	filter();

	//Extracts the user string
	var user_string = user_input.value;


	
	/*
	//This begins the algorithm that Chatbot will use
	*/

	//If no input is found, maintain current response.
	if (user_string == ""){
		
		//Generate unknown responses (recursive duplicate responses impossible)
		var current_unknown = Math.floor(Math.random() * unknown_responses.length);
		while(last_unknown == current_unknown){
			current_unknown = Math.floor(Math.random() * unknown_responses.length);
		}
		
		last_unknown = current_unknown;
		output = blank_responses[current_unknown];

		//SHOW THE RESPONSE ON SCREEN
		response.innerHTML = output;
		
		return;
	}

	//The rest of the code goes in here.

	//Generate unknown responses (recursive duplicate responses impossible)
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
