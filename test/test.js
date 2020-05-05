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
var db1 = ["are", "how", "you"];
var db2 = ["dude", "how", "you"];

//Sample set creation
var set1 = new Set(db1);
var set2 = new Set(db2);


//Sample Input
var str = "I was wondering, how are you?";

//Use Functions
var arr = Tolkenize(str);
var J = Jaccard(set1, set2);

//Verify output
console.log(J);
console.log(arr);


  ///////////////////////
 ////// FUNCTIONS //////
///////////////////////

//Jaccard Similarity
function Jaccard(set1, set2) {
	let intersect = new Set([...set1].filter(i => set2.has(i)));
	let union = new Set([...set1, ...set2]);
	return intersect.size / union.size;
}

//Tolkenize user input
function Tolkenize(str){
	var arr = str.split(/[?,;.]/);
	var arr2 = [];
	for (var i = 0; i < arr.length; i++){
		var temp = arr[i].split(" ");
		for (var j = 0; j < temp.length; j++){
			if (temp[j] == "") temp.splice(j,1);
		}
		if (temp.length == 0) continue;
		temp = new Set(temp.sort());
		arr2.push(temp);
	}
	return arr2;
}