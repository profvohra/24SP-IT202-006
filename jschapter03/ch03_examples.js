// Slide 5
let lastName = "Hopper";
if ( lastName == "Hopper" ) {
  console.log("Last name is Hopper.");
}
if ( lastName != "Grace" ) {
  console.log("Last name is not Grace.");
}
// Slide 8
let rate = prompt("What is the rate?");
if ( isNaN(rate) || rate < 0 ) {
  console.log("Rate is not valid.");
}
// Slide 10
let age = prompt("What is your age?");
if ( age >= 18 ) {
  alert("You may vote.");
} else {
  alert("You are not old enough to vote.");
}
// Slide 15
let years = parseInt(prompt("Enter number of years."));
while ( isNaN(years) || years <= 0 ) {
  console.log("years = " + years);
  years = parseInt(prompt(
      "Years must be a valid positive number."));
}
// Slide 19
for ( let count = 3; count > 0; count--) {
  document.write(count + " ... " );
}
document.write("Blast Off!");
document.write("<br>");
// Slide 31
// declare an array
const totals = [];
console.log("length = " + totals.length);
// initialize the first element in the array
totals[0] = 141.95;
console.log("length = " + totals.length);
totals[1] = 212.25;
totals[2] = 411;
totals[totals.length] = 135.75;
// Slide 34
// for-loop example
let sum = 0;
for ( var index = 0; index < totals.length; index++ ) {
  sum = sum + totals[ index ];
}
document.write("Sum is " + sum);
document.write("<br>");
// Slide 36
// for-in loop example
// 'index' variable holds the current index
for ( let index in totals ) {
  document.write("total at index " + index);
  document.write(" is " + totals[index]);
  document.write("<br>");
}
// Slide 37
// for-of loop example
// 'value' variable holds the current value
for ( let value of totals ) {
  document.write("total is " + value);
  document.write("<br>");
}