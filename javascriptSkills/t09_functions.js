/*******************************************/
// to9_functions.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 09 (Functions)', 'color: blue; background-color: white;');




var userName = 0;
var userAge = 0;
var userAgeCorrect = 'no';
var userMoney = 0;
var userMoneyCorrect = 'no';
var currentYear = 2025;



askUserName();
askUserAge();
askUserMoney();



/*******************************************/
// FUNCTIONS
/*******************************************/




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