/*
test.js 
for the UVic AI Club website.
Created by the UVic AI Club
Nov 29, 2019
*/


  //////////////////
 ////// MAIN //////
//////////////////

//Sample Database
var db_arr = ["are how", "dude how you", "am i was"];

//Converts DB to sets
var db_set = dbToSet(db_arr)

//Sample Input
var str = "What is there to understand?.".toLowerCase();
//var response = "Im well thank you";

//Use Functions
var str_arr = Tolkenize(str);
var str_set = toSets(str_arr);

//The max jaccard value is the first array.
//This value corresponds to the index given in the second array.
var max_j = maxJaccard(str_set, db_set);

// console.log(Jaccard(str_set[0], db_set[max_j[0]]));
// console.log(Jaccard(str_set[1], db_set[max_j[1]]));


var string_arr = Tolkenize(str);
var user_sets = toSets(string_arr);
// var user_string = toString(string_set[0]);


//Query
$.post("test.php", {},
function(data) {

	var db = JSON.parse(data);

	//Convert strings to one large set
	var strings = [];
	for(i in db){
		strings[i] = db[i]["string"];
	}
	
	var db_sets = dbToSet(strings)
	
	console.log(db_sets);
	console.log(user_sets);
	
	var mj = maxJaccard(user_sets, db_sets);
	var unknown = "I don't understand";

	//Combines Responses
	var response = "";
	for(var i = 0; i < mj.length; i++){
		//Respond to null values
		if(mj[i] == null){
			if(i == mj.length -1 ){
				response = response + unknown + ".";
				break;
			}
			response = response + unknown + ", ";
			continue;
		}
		//Database Responses
		if(i == mj.length -1 ){
			response = response + db[mj[i]]["response"] + ".";
			break;
		}
		response = response + db[mj[i]]["response"] + ", ";
	}

	console.log(response);
});



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