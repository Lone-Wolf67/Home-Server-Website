/*******************************************/
// t13_validation.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 13 (Validation)', 'color: blue; background-color: white;');




var userName = 'Invalid';
var userAge = 0;
var userMoney = 0;




/*******************************************/
// FUNCTIONS
/*******************************************/




/*******************************************/
// func mainFunc()
// Called By t13_validation.html
// Starts the code only when the user presses the button.
/*******************************************/

function mainFunc() {

    // First parameter is the text to display in the prompt. 
    // Second parameter is the mode to use ('number' or 'text') 
    // Third parameter is the variable to set the user's input to.
    // Fourth parameter is the default value if the user clicks cancel.
    // Fifth parameter is minumum value (optional) 
    // Sixth is maximum (optional)

    getUserReply('Welcome to my program, please enter your name.', 'text', 'userName', 'Guest',);
    console.log('User entered their name as ' + userName);

    getUserReply('Please enter your age.', 'number', 'userAge', 'Unknown', 13, 116);
    console.log('User entered their age as ' + userAge);

    getUserReply('Please enter your pocket money from 1 to 5.', 'number', 'userMoney', 0, 1, 5);
    console.log('User entered their pocket money as ' + userMoney);

}




/*******************************************/
// func getUserReply()
// Called By t12_validation.html
// Gets the user reply using the parameters specified.
//
// First parameter is the text to display in the prompt. 
// Second parameter is the mode to use ('number' or 'text') 
// Third parameter is the variable to set the user's input to.
// Fourth parameter is the default value if the user clicks cancel.
// Fifth parameter is minumum value (optional) 
// Sixth is maximum (optional)
/*******************************************/

function getUserReply(_promptText, _type, _variableName, _default, _minimum, _maximum) {

    var loopContinue = true;
    var tempVariable = 0;
    var errorMsg = '';

    while(loopContinue == true) {

        tempVariable = prompt(errorMsg + _promptText);

        if(tempVariable == null) {

            window[_variableName] = _default;
            loopContinue = false;

        }

        tempVariable = (tempVariable || '').trim();

        if(tempVariable == '') {

            errorMsg = 'Invalid entry, please retry.\n';

        }

        if(_type == 'text') {

            if(!isNaN(tempVariable)) {

                errorMsg = 'Invalid entry, please retry.\n';

            } else {

                window[_variableName] = tempVariable;
                errorMsg = '';
                loopContinue = false;

            }
        } else {

            if(isNaN(tempVariable)) {

                errorMsg = 'Invalid entry, please retry.\n';

            } else {

                if(tempVariable < _minimum || tempVariable > _maximum) {

                    errorMsg = 'Invalid entry, please retry.\n';

                } else {

                    window[_variableName] = tempVariable;
                    errorMsg = '';
                    loopContinue = false;

                }
            }
        }
    }
}
