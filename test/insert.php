<?php
	//Step1
	$db = mysqli_connect('localhost','debrah2','','chatbot')
	or die('Error connecting to MySQL server.');

	$here = $_POST["word"];

	//Step2
	$query = "SELECT * FROM user_strings";


	mysqli_query($db, $query) or die('Error querying database.');

	$insert = "INSERT INTO user_strings(string) VALUES (\"$here\")";
	mysqli_query($db, $insert) or die('Error inserting into database.');

	$result = mysqli_query($db, $query);

	while ($row = mysqli_fetch_array($result)){
	echo $row['string'] . '<br />';
	}
	mysqli_close($db);
?>