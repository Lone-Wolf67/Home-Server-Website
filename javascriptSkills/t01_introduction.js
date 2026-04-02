/*******************************************/
// to1_intro.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 01 (Intro)', 'color: blue; background-color: white;');




var taskName = '%c JS Task 01 (Intro)';
var variable = 1;

taskName = 'Tom\'s Fav Colour is unknown';

console.log(taskName);


console.log('Score = ' + variable);
setInterval(myTimer, 1000);
myTimer();
  



/*******************************************/
// FUNCTIONS
/*******************************************/




/*******************************************/
// func myTimer()
// Called By t01_intro (score increase loop)
// Increase the score by *2 every 'tick' based on the interval set. Then prints it to console.
/*******************************************/

function myTimer() {
  console.log('Score = ' + variable);
  variable = variable + variable;
}
