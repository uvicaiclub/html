<?php
  //Obtain user string from javascript file
  $user_string = $_POST['user_string'];

  //Establish database connection
  $db = mysqli_connect('localhost','debrah2','','chatbot')
  or die('Error connecting to MySQL server.');

  //Query string 
  $query = "SELECT response FROM user_strings WHERE string=\"".$user_string."\"";  

  //Query request
  mysqli_query($db, $query) or die('Error querying database.');
  $result = mysqli_query($db, $query);

  //Array of query responses
  $row = mysqli_fetch_array($result);

  //Close database
  mysqli_close($db);
  
  //Return string
  echo $row[0];

?>