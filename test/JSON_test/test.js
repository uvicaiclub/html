

var user_string = "Debrah";

var arr = [1,2,3,4];


//Query
$.post("test.php", {user_input: arr},
function(data) {
	console.log(JSON.parse(data));

	
});