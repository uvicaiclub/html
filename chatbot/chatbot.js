/*
chatbot.js 
For use with www.uvicaiclub.ca
Created by the UVic AI Club
Nov 26, 2019
*/
alert("Welcome to the UVic AI Club Chatbot!\n\nIf Chatbot does not understand your input, type in a proper response and click \"Add Response\".\n\nThis will train Chatbot to correctly respond to dialog.\n\nThank you and enjoy!");

var previous_user_input = document.getElementById("previous_user_input");
var unknown = "I don't understand";

function Submit() {
	var user_string = $("#user_string").val();
	previous_user_input.innerHTML = user_string;

	var string_arr = Tolkenize(user_string.toLowerCase());
	var user_sets = toSets(string_arr);

	// $.post("../chatbot/chatbot.php", {user_string: user_string},
	// function(data) {
	// 	$('#response').html(data); //Send to html
	// 	$('#chat')[0].reset();
	// });

	//Query
	$.post("../test/test.php", {},
	function(data) {

		var db = JSON.parse(data);

		//Convert strings to one large set
		var strings = [];
		for(i in db){
			strings[i] = db[i]["string"];
		}
		
		var db_sets = dbToSet(strings)
				
		var mj = maxJaccard(user_sets, db_sets);
		

		//Combines Responses
		var response = "";
		for(var i = 0; i < mj.length; i++){
			//Respond to null values
			if(mj[i] == null){
				if(i == mj.length -1 ){
					response = response + unknown;
					break;
				}
				response = response + unknown + ", ";
				continue;
			}
			//Database Responses
			if(i == mj.length -1 ){
				response = response + db[mj[i]]["response"];
				break;
			}
			response = response + db[mj[i]]["response"] + ", ";
		}
		
		$('#response').html(response); //Send to html
		$('#chat')[0].reset();

		$('#thumb_up').show();
		$('#thumb_down').show();
	});
}


function AddResponse() {
	var user_string = $("#user_string").val();
	var previous_user_string = previous_user_input.innerHTML;

	$.post("../chatbot/addResponse.php", {previous_user_string: previous_user_string, user_string: user_string},
	function(data) {
		$('#response').html(data); //Send to html
		$('#chat')[0].reset();
		
		$('#thumb_up').show();
		$('#thumb_down').show();
	});
}

function UpVote() {
	var previous_user_string = previous_user_input.innerHTML;
	var response2 = response.innerHTML;

	//Omit unknown response
	if(response2 == unknown) return;

	$.post("../chatbot/upvote.php", {previous_user_string: previous_user_string, response2: response2},
	function(data) {

		$('#thumb_up').hide();
		$('#thumb_down').hide();
	});
}

function DownVote() {
	var previous_user_string = previous_user_input.innerHTML;
	var response2 = response.innerHTML;

	//Omit unknown response
	if(response2 == unknown) return;

	$.post("../chatbot/downvote.php", {previous_user_string: previous_user_string, response2: response2},
	function(data) {

		$('#thumb_up').hide();
		$('#thumb_down').hide();
	});
}


  ///////////////////////
 ////// FUNCTIONS //////
///////////////////////

//Jaccard Similarity
function Jaccard(set1, set2) {
	let intersect = new Set([...set1].filter(i => set2.has(i)));
	let union = new Set([...set1, ...set2]);
	return intersect.size / union.size;
}

//Tolkenize user input into string arrays
function Tolkenize(str){
	var arr = str.split(/[?!,;.]/);
	var arr2 = [];
	for (var i = 0; i < arr.length; i++){
		var temp = arr[i].split(" ");
		for (var j = 0; j < temp.length; j++){
			if (temp[j] == "") temp.splice(j,1);
		}
		if (temp.length == 0) continue;
		temp = temp.sort();
		arr2.push(temp);
	}
	return arr2;
}

function toStrings(arr){
	var arr2 = [];
	var str2 = "";
	for(var i = 0; i < arr.length; i++){
		arr[i] = Array.from(arr[i]);
		for(var j = 0; j < arr[i].length; j++){
			str2 = str2 + arr[i][j];
			if(j != arr[i].length - 1) str2 = str2 + " ";
		}
		arr2.push(str2);
		str2 = "";
	}
	return arr2;
}

function toString(str_set){
	str = ""
	for(elem of str_set){
		if (str == ""){
			str = str + elem;	
			continue;
		}
		str = str+ " " + elem;
	}
	return str;
}

function toSets(str_arr){
	var str_set = []
	for(var i = 0; i < str_arr.length; i++){
		str_set.push(new Set(str_arr[i]));
	}
	return str_set;
}

function dbToSet(db_arr){
	var db_set = [];
	for (var i = 0; i < db_arr.length; i++){
		var a = db_arr[i].split(" ");
		var b = new Set(a);
		db_set.push(new Set(a));
	}
	return db_set;
}

//Returns the max Jaccard index
function maxJaccard(str_set, db_set){
	var max_j = [];
	var max_i = []
	var jac;
	for(var i = 0; i < str_set.length; i++){
		max_j.push(0);
		max_i.push(0);
		for(var j = 0; j < db_set.length; j++){
			jac = Jaccard(str_set[i], db_set[j]);
			if(jac >= max_j[i]){
			max_j[i] = jac;
			max_i[i] = j;
			}
		}
		//Converts Jaccard value of 0 to null
		if(max_j[i] == 0){
			max_i[i] = null;
		}
		jac = 0;
	}
	return max_i;
}