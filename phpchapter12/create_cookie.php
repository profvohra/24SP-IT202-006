<html>
  <head>
    <title>Create Cookie Example</title>
  </head>
  <body>
    <?php
      // Slide 7 and 8
      $cookie_name = "userid";
      $cookie_value = "87";
      $seven_days_in_seconds = 60 * 60 * 24 * 7;

      setcookie($cookie_name, $cookie_value,
        time() + $seven_days_in_seconds, "/");

      echo "Cookie named $cookie_name is set!";
    ?>
  </body>
</html>