<?php
  // get the data from the form
  // DEBUGGING ONLY
  // print_r($_POST);

  // Slide 44
  $product_description = filter_input(INPUT_POST, 'product_description');
  $list_price = filter_input(INPUT_POST, 'list_price');
  $discount_percent = filter_input(INPUT_POST, 'discount_percent');
?>