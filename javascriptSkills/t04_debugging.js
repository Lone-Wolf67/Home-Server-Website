/*******************************************/
// to4_debugging.js
// Written by a dumb ass (and fixed by Wilkin Porter) Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 04 (Debugging)', 'color: blue; background-color: white;');




// Set up the size of the page
var lengthVar = 8;
var widthVar = 10;

// calculate the area
var area = lengthVar * widthVar;

// calculate the perimeter
var perimeter = 2 * lengthVar + 2 * widthVar; 




// Display the results
console.log( ('An area of a piece of paper with a length of ' + lengthVar +", and a width of " + widthVar + " is "+ area) )
console.log( ('The same piece of paper has a perimeter of ' + perimeter) )





// Check, does this result look sensible?
if (perimeter < area){
    console.log("Yay, your area is larger, this is right for this example")
} else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example")
}
