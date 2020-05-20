<?php
  //Obtain strings from javascript file
  $previous_user_string = $_POST['previous_user_string'];
  $response = $_POST['response2'];

  //Establish database connection
  $server = 'localhost';
  $username = "debrah2";
  $password = "";
  $db_name = 'chatbot';
  $db = mysqli_connect($server, $username, $password, $db_name) or die('Error connecting to MySQL server.');


  //Query string
  $query = "SELECT rating FROM user_strings WHERE string=\"".$previous_user_string."\" AND response=\"".$response."\";" ;

  //Query request
  $result = mysqli_query($db, $query) or die('Error querying database.');

  //Array of query responses
  $row = mysqli_fetch_array($result);

  //Increase the rating by 1
  $new_rating = $row[0] + 1;

  //Update String
  $update = "UPDATE user_strings SET rating=".$new_rating." WHERE string=\"". $previous_user_string . "\" AND response=\"" . $response ."\";";

  //Update request
  mysqli_query($db, $update) or die('Error querying database.');

  //Close database
  mysqli_close($db);
?>