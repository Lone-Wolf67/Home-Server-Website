/*******************************************/
// to7_if.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 07 (If loops)', 'color: blue; background-color: white;');




var userName = 0;
var userAge = 0;
var userAgeCorrect = 'no';
var userMoney = 0;
var userMoneyCorrect = 'no';
var currentYear = 2025;




userName = prompt('Welcome to my program! \nWhat is your name?', 'Guest');

userAge = prompt('How old are you?');

userMoney = prompt('How much money do you have?');




while(userMoneyCorrect == 'no') {
    if (parseFloat(userMoney) > 0){
        if (Number(userMoney) < 4) {
            console.log('User successfully entered their pocket money as: $' + userMoney + ' (sorry to say the user is broke)');
            alert('Hi ' + userName + '\nI Predict that you were born in ' + (currentYear - userAge) + ' (Not accounting for months) \nYou have $' + userMoney + '\nSorry you can\'t afford a $4 chocolate bar. (Seems a bit cheap too in this economy)');
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