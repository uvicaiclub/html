<?php

  //Obtain user string from javascript file
  $my_array = $_POST['user_input'];

  // //Establish database connection
  // $db = mysqli_connect('localhost','debrah2','','chatbot')
  // or die('Error connecting to MySQL server.');

  // //Query string 
  // $query = "SELECT * FROM user_strings";  

  // //Query request
  // mysqli_query($db, $query) or die('Error querying database.');
  // $result = mysqli_query($db, $query);

  // //Array of query responses
  // $row = mysqli_fetch_array($result);

  // //Close database
  // mysqli_close($db);

  // //Return string
  echo json_encode($my_array);


?>