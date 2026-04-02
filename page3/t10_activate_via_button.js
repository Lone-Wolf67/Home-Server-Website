/*******************************************/
// t10_activate_via_button.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 10 (Activate via button)', 'color: blue; background-color: white;');




var userName = 0;
var userAge = 0;
var userAgeCorrect = 'no';
var userMoney = 0;
var userMoneyCorrect = 'no';
var currentYear = 2025;




/*******************************************/
// FUNCTIONS
/*******************************************/




/*******************************************/
// func start()
// Called By t10_activate_via_button.html
// Starts the code only when the user presses the button.
/*******************************************/

function start() {

    askUserName();
    askUserAge();
    askUserMoney();

}





/*******************************************/
// func askUserName()
// Called By (this script)
// Creates a prompt that asks the users's name and puts it in the userName variable
/*******************************************/

function askUserName() {

    userName = prompt('Welcome to my program! \nWhat is your name?', 'Guest');
    
}




/*******************************************/
// func askUserAge()
// Called By (this script)
// Creates a prompt that asks the users's age and puts it in the userAge variable.  
// However, if they put in anything that's not a number or a number less than 0 or greater 
// than 116 it will ask them again and not proceed.
/*******************************************/

function askUserAge() {

    userAge = prompt('How old are you?');

    while(userAgeCorrect == 'no') {
        if (Number(userAge) > 0 && Number(userAge) < 116){
            console.log('User successfully entered their age as: ' + userAge);
            // alert('You are ' + userAge + ' years old');
            console.log('User\'s age Successfully set and displayed');
            userAgeCorrect = 'yes';
        } else {
            console.log('User incorrectly entered their age as: ' + userAge);
            userAge = prompt('Please enter a valid age \n(This will not affect the use of theis webpage)');
        }
    }
}




/*******************************************/
// func askUserMoney()
// Called By (this script)
// Creates a prompt that asks the users's pocket money and puts it in the userMoney variable.  
// However, if they put in anything that's not a number or a number less than 0 it will not proceed.
// If the user puts in a number less than 4 then it will tell them they can't afford a chocolate bar in the final message 
// and if they have $4 or more it will say that they can afford a chocolate bar.
/*******************************************/

function askUserMoney() {

    userMoney = prompt('How much money do you have?');

    while(userMoneyCorrect == 'no') {
        if (parseFloat(userMoney) > 0){
            if (Number(userMoney) < 4) {
                console.log('User successfully entered their pocket money as: $' + userMoney + ' (sorry to say the user is broke)');
                alert('Hi ' + userName + '\nI Predict that you were born in ' + (currentYear - userAge) + ' (Not accounting for months) \nYou have $' + userMoney + '\nSorry you can\'t afford a $4 chocolate bar. (Brokie)');
                userMoneyCorrect = 'yes';
            } else {
                console.log('User successfully entered their pocket money as: $' + userMoney);
                alert('Hi ' + userName + '\nI Predict that you were born in ' + (currentYear - userAge) + ' (Not accounting for months) \nYou have $' + userMoney + '\nYou can afford a $4 chocolate bar. (Stop flexing bro)');
                console.log('User\'s pocket money Successfully set and displayed');
                userMoneyCorrect = 'yes';
            }
        } else {
            console.log('User incorrectly entered their pocket money as: ' + userMoney);
            userMoney = prompt('Please enter an actual pocket money amount (don\'t include the \'$\' please \n(This may affect the use of this webpage)');
        }
    }
}




/*******************************************/
// func changeText()
// Called By t10_activate_via_button.html
// Changes the paragraph's text when the user presses the button
/*******************************************/

function changeText() {
    console.log('%c changeText (Function)', 'color: blue; background-color: white;');

    paragraphText.textContent = 'Wow you have successfully changed the text of the paragraph using the button below';
    paragraphText.color = 'red';
}




/*******************************************/
// func getFormInput()
// Called By t10_activate_via_button.html
// Gets the user's input from the form
/*******************************************/

function getFormInput() {
    console.log('%c getFormInput (Function)', 'color: blue; background-color: white;');

    if (document.getElementById('f_user_details').checkValidity()) {
        console.log('the task didn\'t not succeed');

        var formUserName = document.forms["f_user_details"]["i_name"].value;
        var formUserAge = document.forms["f_user_details"]["i_age"].value;
        var formUserMoney = document.forms["f_user_details"]["i_money"].value;

        console.log('Username = ' + formUserName + '\n\nUser age = ' + formUserAge + '\n\nUser pocket money = ' + formUserMoney);
    }
}





























/*
var carArray = [
    {make: 'Austin', model: 'Mini', engineSize: '1275cc', seats: 4, stock: 1}, 
    {make: 'Ford', model: 'Escort', engineSize: '1800cc', seats: 4, stock: 0}, 
    {make: 'Audi', model: 'Quattro', engineSize: '2100cc', seats: 5, stock: 1}, 
    {make: 'Toyota', model: 'Yaris GR', engineSize: '1600cc', seats: 4, stock: 3}, 
];

console.table(carArray);

console.table(carArray[2]);

console.table(carArray[0].engine);
*/




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