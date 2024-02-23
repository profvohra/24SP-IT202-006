<?php
  // Slide 37
  // use database_local.php OR database_njit.php
  require_once('database_local.php');

  $product_id = filter_input(INPUT_POST, 'product_id', FILTER_VALIDATE_INT);
  $category_id = filter_input(INPUT_POST, 'category_id', FILTER_VALIDATE_INT);

  if($product_id != FALSE && $category_id != FALSE) {
    $query = 'DELETE FROM products WHERE productID = :product_id';
    // 4 step: prepare, bindValue, execute, closeCursor
    $statement = $db->prepare($query);
    $statement->bindValue(':product_id', $product_id);
    $success = $statement->execute();
    $statement->closeCursor();
    echo "<p>Your delete statement status is $success</p>";
  }
?>