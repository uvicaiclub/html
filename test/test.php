<?php

  $test = "HERE";
  

  //Obtain user string from javascript file
  $user_string = $_POST['user_string'];

  //Establish database connection
  $db = mysqli_connect('localhost','debrah2','','chatbot')
  or die('Error connecting to MySQL server.');

  //Query string 
  $query = "SELECT * FROM user_strings";  

  //Query request
  mysqli_query($db, $query) or die('Error querying database.');
  $result = mysqli_query($db, $query);
  
    // Close database
  mysqli_close($db);


  $arr2 = array();
  $arr2[] = 1;
  $arr2[] = 2;

  $arr = array();

  while($row = mysqli_fetch_array($result)){
    $arr[] = $row;
  }


    echo json_encode($arr);

  // //Insert string
  // $response = $_POST['response'];

  // $insert = "INSERT INTO user_strings(string, response, rating) VALUES (\"".$user_string."\", \"".$response."\", 1)"; 

  // //Query request
  // $result = mysqli_query($db, $insert) or die('Error querying database.');


  //Return string

?>
