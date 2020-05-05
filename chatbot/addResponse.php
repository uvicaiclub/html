<?php
  //Obtain strings from javascript file
  $user_string = $_POST['user_string'];
  $previous_user_string = $_POST['previous_user_string'];

  //Establish database connection
  $db = mysqli_connect('localhost','debrah2','','chatbot')
  or die('Error connecting to MySQL server.');


  //Insert string
  $insert = "INSERT INTO user_strings(string, response) VALUES (\"".$previous_user_string."\", \"".$user_string."\")"; 
  
  //Insert new response into database
  mysqli_query($db, $insert) or die('Error inserting into database.');

  //Close db 
  mysqli_close($db);
  
  //Return string
  echo $user_string;

?>