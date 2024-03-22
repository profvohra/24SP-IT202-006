const scores_array = [];
let score = 0;

do {
  score = parseInt(prompt("Enter a test score, or enter -1 to end scores.", -1));
  if ( score >= 0 && score <= 100 ) {
    // add this score element to our array
    scores_array[scores_array.length] = score;
  } else if ( score != -1 ) {
    alert("Score must be a valid number from 0 to 100.");
  }
} while ( score != -1 );

if ( scores_array.length > 0 ) {
  // display the contents of the array
  // using for-in loop
  for ( let index in scores_array ) {
    document.write(`Score ${index}: ${scores_array[index]}`);
    document.write("<br>");
  }

  // TODO write a for-loop (any of the 3 types)
  // to sum all the values in the scores_array

  // TODO calculate averable by dividing sum by the array's length
  // and print this value using document.write

  // Optional: Format the average using toFixed or parseInt
}