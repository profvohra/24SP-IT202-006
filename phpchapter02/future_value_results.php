<?php
  // Slide 65
  // get the data from the form
  $investment = filter_input(INPUT_POST, 'investment', FILTER_VALIDATE_FLOAT);
  $interest_rate = filter_input(INPUT_POST, 'interest_rate' FILTER_VALIDATE_FLOAT);
  $years = filter_input(INPUT_POST, 'years', FILTER_VALIDATE_INT);

  $error_message = '';

  // validate investment
  if( $investment === FALSE) {
    $error_message = "Investment must be a valid number.";
  }
  // TODO include additional field validation from Slides 65 and 66

  // Slide 67
  if($error_message == '') {
    include("future_value_form.php");
    exit();
  }

  // calculate the future value
  // TODO Insert calculation and formatting from Slide 67
?>
<html>
  <!-- TODO Insert html to display values from Slide 68
</html>