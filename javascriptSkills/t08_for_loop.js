/*******************************************/
// to8_for_loop.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 08 (For Loops)', 'color: blue; background-color: white;');




var count = 0;
//var classArray = [0, 0, 0, 0, 0,];
var total = 0;




for(count = 0; count < 5; count ++) {
    var number1 = prompt('Please input a number to add.');
    total = Number(number1) + total;
}

alert(total);



/*
let objectArray = [
    {make: 'Austin', model: 'Mini', engine: '1275', seats: 4, stock: 1}, 
    {make: 'Ford', model: 'Escort', engine: '1800', seats: 4, stock: 0}, 
    {make: 'Audi', model: 'Quattro', engine: '2100', seats: 5, stock: 1}, 
    {make: 'Toyota', model: 'Yaris gr', engine: '1600', seats: 4, stock: 3}, 
];
console.table(objectArray);
console.table(objectArray[2]);
console.table(objectArray[0].engine);

*/