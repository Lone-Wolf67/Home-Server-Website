/*******************************************/
// to5_alerts_prompts.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 05 (Alerts and Prompts)', 'color: blue; background-color: white;');




var userName = 0;
var userAge = 0;
var userAgeCorrect = 'no';
var userMoney = 0;
var currentYear = 2025;
var userMoneyCorrect = 'no';




userName = prompt('Welcome to my program! \nWhat is your name?', 'Guest');

// localStorage.setItem('userName', userName) 

console.log('User successfully entered their name as: ' + userName);

// alert('Your name is ' + userName);

console.log('User\'s name successfully set and displayed');




userAge = prompt('What is your age? \n(This will not affect the use of this webpage)');

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




userMoney = prompt('How much money do you have? \n(This may affect the use of this webpage)');

while(userMoneyCorrect == 'no') {
    if (parseFloat(userMoney) > 0){
        if (Number(userMoney) < 15) {
            console.log('User successfully entered their pocket money as: $' + userMoney + ' (sorry to say the user is broke)');
            alert('You only have $' + userMoney + ' to your name? You are broke lol');
            console.log('User\'s pocket money Successfully set and displayed (they\'re still broke tho)');
            userMoneyCorrect = 'yes';
        } else {
            console.log('User successfully entered their pocket money as: $' + userMoney);
            // alert('You have $' + userMoney + ' to your name. At least you aren\'t broke lol');
            console.log('User\'s pocket money Successfully set and displayed');
            userMoneyCorrect = 'yes';
        }
    } else {
        console.log('User incorrectly entered their pocket money as: ' + userMoney);
        userMoney = prompt('Please enter an actual pocket money amount (don\'t include the \'$\' please \n(This may affect the use of this webpage)');
    }
}




alert( 'Hi ' + userName + '\n\nAs of ' + currentYear + ' you are ' + userAge + ' years old' + 
    '\n\nYou must then have been born in ' + (currentYear - userAge) + ' (Not accounting for months) \n\nIn 10 Years you will be ' +
    (Number(userAge) + 10) + '\n\nYou have $' + userMoney + ' dollars \n\nHalf of your money is $' + (userMoney / 2) );