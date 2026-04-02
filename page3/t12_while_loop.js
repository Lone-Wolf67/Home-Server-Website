/*******************************************/
// t12_while_loop.js
// Written by Wilkin Porter Term 2 2025
// ???????
/*******************************************/
console.log('%c JS Task 12 (While Loop)', 'color: blue; background-color: white;');




/*******************************************/
// func mainFunc()
// Called By t12_while_loop.html
// Starts the code only when the user presses the button.
/*******************************************/

function mainFunc() {

    var userLoopContinue = 0;
    var computerLoopContinue = 'y';

    while(computerLoopContinue == 'y') {

        userLoopContinue = prompt('wazzup gang press \'y\' to continue the loop or press \'n\' to stop it');

        if(userLoopContinue == null) {
            console.log('its null')
            break;
        }

        if(userLoopContinue != 'y' && userLoopContinue != 'n') {
            alert(userLoopContinue + ' is an invalid response. \nPlease enter \'n\' or \'y\'')
        }
        
        if(userLoopContinue == 'n') {
            console.log('Stopping loop');
            computerLoopContinue = 'n';
        } else {
            console.log('Continuing loop');
        }

    }

}