    <?php
     
    // Lets test if the form has been submitted
    if(isset($_POST['SubmitCheck'])) {
        // The form has been submited
        // Check the values!
        if($_POST['Username'] == "John" and $_POST['Password'] == "Doe") {
            // User validated!
            echo "Thats right! You have been logged in!";
     
            // Check if the checkbox was checked
            if(isset($_POST['Remember'])) {
                echo "<br>You will be remembered!";
            }
            else {
                echo "<br>John who?!";
            }
        }
        else {
            // User info invalid!
            echo "Sorry mate, try again!";
        }
    }
    else {
        // The form has not been posted
        // Show the form
    ?>
    <form id="Form1" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        Username: <input type="text" name="Username"><br>
        Password: <input type="password" name="Password"><br>
        Remember me: <input type="checkbox" name="Remember" checked="chekced">
        <input type="hidden" name="SubmitCheck" value="sent">
        <input type="Submit" name="Form1_Submit" value="Login">
    </form>
    <?php
    }
    ?>