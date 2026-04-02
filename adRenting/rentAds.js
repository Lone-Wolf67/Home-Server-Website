/***************************************************************************/
// rentAds.js
// Written by Wilkin Porter Term 2 2025
// Main script for rental site
/***************************************************************************/
console.log('%crentAds.js (the script I wanted to call \'script.js\')', 'color: blue; background-color: white;');






/***************************************************************************/
// Variables / Constants / Arrays
/***************************************************************************/






//Base form
var formUserName;
var formUserSpot;
var formUserDays;

//Extra form validation
var closestAdSpotOutput = null;
var closestAdSpotLoopVar;

//Ad Creation
var adText;
var adLink;

//Loading ads
var adLoadingNumber;

//Storing the ads
var adSpotArrayString;
var storedArrayString;
var storedArray;

//Ad removal
var adRemovalNumber;

//Dates
var readDate;
var resultDate;

// Requirement mode (Set this to false to disable the default ad and number checking for the user's name)
var requirementMode = false;

//Main Array
var adSpotArray = [
    {spot: 1, available: true, text: 'Spot 1', link: '', dayPurchased: '', purchaseLength: 0}, 
    {spot: 2, available: true, text: 'Spot 2', link: '', dayPurchased: '', purchaseLength: 0}, 
    {spot: 3, available: true, text: 'Spot 3', link: '', dayPurchased: '', purchaseLength: 0}, 
    {spot: 4, available: true, text: 'Spot 4', link: '', dayPurchased: '', purchaseLength: 0}, 
    {spot: 5, available: true, text: 'Spot 5', link: '', dayPurchased: '', purchaseLength: 0}, 
    {spot: 6, available: true, text: 'Spot 6', link: '', dayPurchased: '', purchaseLength: 0}, 
];






/***************************************************************************/
// Functions
/***************************************************************************/






/***************************************************************************/
// func main()
// Called By home.html
// Starts the code when the user enters the page
// Loads the ad arrray, loads the ads for the user to see and and removes the old ads
/***************************************************************************/

function main() {
    loadAdSpotArray();

    adRemovalNumber = 0;
    while (adRemovalNumber <= 5) { 
        removeAd(adRemovalNumber);
        adRemovalNumber = adRemovalNumber + 1;
    }

    // Uncomment the next line to forcefully remove an ad (spot 0-5)
    //debugRemoveAd(5);

    adLoadingNumber = 0;
    while (adLoadingNumber <= 5) { 
        loadAds(adLoadingNumber); 
        adLoadingNumber = adLoadingNumber + 1;
    }

}






/***************************************************************************/
// func editAdSpot()
// Called By getAdParameters()
// Edits the array to use the inputs the user specified when making their ad
/***************************************************************************/

function editAdSpot() {
    formUserName = sessionStorage.getItem("formUserName"); 
    formUserDays = Number(sessionStorage.getItem("formUserDays")); 
    formUserSpot = Number(sessionStorage.getItem("formUserSpot")); 

    if (!formUserSpot) { 
        // If it can't get anything from sessionStorage formUserSpot (i.e. it has been removed and not re-added, 
        // which means the user hasn't filled out rent.html) then it will display an error.
        document.getElementById('alreadyCompletedWarning').textContent = 'Something went wrong. You may have already made this ad.';
        document.getElementById('alreadyCompletedWarning').style.color = 'red';

        return false; // Exits GetAdParameters() too
    } 

    adSpotArray[formUserSpot - 1].text = adText;
    adSpotArray[formUserSpot - 1].link = adLink;
    adSpotArray[formUserSpot - 1].dayPurchased = new Date();
    adSpotArray[formUserSpot - 1].purchaseLength = formUserDays;
    adSpotArray[formUserSpot - 1].available = false;

    // This is what determines above error
    sessionStorage.removeItem("formUserDays"); 
    sessionStorage.removeItem("formUserSpot");
}






/***************************************************************************/
// func removeAd()
// Called By main()
// removes the ad in the spot specified in () only if it is after it's rent period
/***************************************************************************/

function removeAd(spot) {
    if (adSpotArray[spot].dayPurchased === 0) {
        return;
    }

    readDate = new Date(adSpotArray[spot].dayPurchased);
    resultDate = new Date(readDate); // This is a clone of readDate so it doesn't accidentally change dayPurchased

    if (isNaN(resultDate.getTime())) {
        return;
    }

    resultDate.setDate(resultDate.getDate() + adSpotArray[spot].purchaseLength);

    if (new Date() > resultDate) {
        adSpotArray[spot].available = true;
        adSpotArray[spot].text = 'Spot ' + adSpotArray[spot].spot;
        adSpotArray[spot].link = '';
        adSpotArray[spot].dayPurchased = 0;
        adSpotArray[spot].purchaseLength = 0;

        storeAdSpotArray();

        return;
    }
}






/***************************************************************************/
// func storeAdSpotArray()
// Called By getAdParameters()
// Replaces the data in session storage with the data in the 
// temporary array (adSpotArray)
/***************************************************************************/

function storeAdSpotArray() {
    adSpotArrayString = JSON.stringify(adSpotArray); // Stringifies the array so it can be stored.
    localStorage.setItem("sessionAdSpotArray", adSpotArrayString);
}






/***************************************************************************/
// func loadAdSpotArray()
// Called By main()
// Replaces the data in the temporary array (adSpotArray) with the data in 
// the session storage
/***************************************************************************/

function loadAdSpotArray() {
    storedArrayString = localStorage.getItem("sessionAdSpotArray");

    // If requirementMode is false, when the user loads the page for the first time, 
    // it will not load the default ad and it will not check the user's name for numbers.
    // If it's set to true it will do the opposite.
    // Mr Gillies, I'm sorry if this comment was too long to read.
    if (requirementMode === false) {
        if (storedArrayString === null) {
            return;
        } else {
            adSpotArray = JSON.parse(storedArrayString); // Un-stringifies the array
        }
    } else {
        if (storedArrayString === null) { 
            adSpotArray[2].text = 'Pop-up Ads and Behaviour Patterns: A Quantitative Analysis Involving Perception of Saudi Users';
            adSpotArray[2].link = 'https://www.researchgate.net/publication/356173187_Pop-up_Ads_and_Behaviour_Patterns_A_Quantitative_Analysis_Involving_Perception_of_Saudi_Users';
            adSpotArray[2].dayPurchased = new Date();
            adSpotArray[2].purchaseLength = 9999;
            adSpotArray[2].available = false;
            storeAdSpotArray();
        } else {
            adSpotArray = JSON.parse(storedArrayString); // Un-stringifies the array
        }
    }
}






/***************************************************************************/
// func loadAds()
// Called By main()
// loads the text and links from the temporary array (adSpotArray) 
// into the html in the right spots
/***************************************************************************/

function loadAds(spot) {
    // When loading/displaying ads this sets the text of the ad
    document.getElementById('adText' + (spot + 1)).textContent = adSpotArray[spot].text; 
    
    if (adSpotArray[spot].link && adSpotArray[spot].link !== '') {
        // When loading/displaying ads this sets the link of the ad
        document.getElementById('adLink' + (spot + 1)).setAttribute('onclick', "window.open('" + adSpotArray[spot].link + "', '_blank')"); 
    } else {
        // If the spot is empty (i.e no ad is there) it will remove the link attribute so it won't open a new blank tab.
        document.getElementById('adLink' + (spot + 1)).removeAttribute('onclick'); 
    }
}






/***************************************************************************/
// func getAdParameters()
// Called By make.html
// Gets the text and link the user put in for their ad and saves it to the 
// local array before saving that to session storage.
/***************************************************************************/

function getAdParameters() {
    if (document.getElementById('mAdDetails').checkValidity()) {
        console.log('Ad creation form validity check passed');

        loadAdSpotArray();

        adText = document.forms["mAdDetails"]["mText"].value;
        adLink = document.forms["mAdDetails"]["mLink"].value;

        if (editAdSpot() === false) {
            return;
        }

        storeAdSpotArray();

        location.href='home.html';
    }
}






/***************************************************************************/
// func getFormInput()
// Called By rent.html
// Gets the user's info and puts it into variables
// Also checks to make sure the user isn't using an ad spot that is 
// already in use, with the help of closestAdSpot() 
/***************************************************************************/

function getFormInput() {
    if (document.getElementById('fUserDetails').checkValidity()) {
        formUserName = document.forms["fUserDetails"]["uName"].value;
        formUserDays = document.forms["fUserDetails"]["uDays"].value;
        formUserSpot = document.forms["fUserDetails"]["uSpot"].value;

        loadAdSpotArray();
        closestAdSpot(Number(formUserSpot));
        
        // Checks to see if formUserName contains numbers. This can be disabled by setting requirementMode to false.
        if (/\d/.test(formUserName) && requirementMode === true) {
            document.getElementById('nameWarning').textContent = 'Your name contains a number, according to Mr. Gillies, this is a problem. If your name actually contains a number, go enlighten him.';
            document.getElementById('nameWarning').style.color = 'red';
        } else {
            document.getElementById('nameWarning').textContent = '';
        }

        if (closestAdSpotOutput == 'true') {
            if (/\d/.test(formUserName) && requirementMode === true) {
                return;
            }

            sessionStorage.setItem("formUserName", formUserName);
            sessionStorage.setItem("formUserDays", formUserDays);
            sessionStorage.setItem("formUserSpot", formUserSpot);
            console.log("tried")
            location.href='make.html';
        } 

        if (closestAdSpotOutput == 'false') {
            document.getElementById('unavailableWarning').textContent = 'Sorry, there are no spots available to rent. Please try again tomorrow.';
            document.getElementById('unavailableWarning').style.color = 'red';
        }


        if (!isNaN(closestAdSpotOutput)) {
            document.getElementById('unavailableWarning').textContent = 'Sorry, that spot is not available. The closest spot available is spot ' + closestAdSpotOutput;
            document.getElementById('unavailableWarning').style.color = 'red';
        }
    }
}






/***************************************************************************/
// func closestAdSpot()
// Called By getFormInput()
// Checks to make sure the user isn't using an ad spot that is already in use.
/***************************************************************************/

function closestAdSpot(spot) {
    closestAdSpotOutput = 'false';
    
    // Checks to see if the user's output is okay. If so, sets closestAdSpotOutput to 'true'.
    // Strings are required otherwise it breaks !isNaN()
    if (adSpotArray[spot - 1].available === true) {
        closestAdSpotOutput = 'true';
        return;
    }

    // If the ad the user has selected is already in use it will try lower numbers. (higher spots).
    for (closestAdSpotLoopVar = spot - 1; closestAdSpotLoopVar >= 0; closestAdSpotLoopVar--) {
        if (adSpotArray[closestAdSpotLoopVar].available === true) {
            closestAdSpotOutput = closestAdSpotLoopVar + 1;
            return;
        }
    }

    // If it can't find any lower numbers, (higher spots) it will look for higher numbers. (lower spots).
    for (closestAdSpotLoopVar = spot; closestAdSpotLoopVar < adSpotArray.length; closestAdSpotLoopVar++) {
        if (adSpotArray[closestAdSpotLoopVar].available === true) {
            closestAdSpotOutput = closestAdSpotLoopVar + 1;
            return;
        }
    }

    // If it can't find any available spots it will return 'false' also in a string becasue otherwise it will break !isNaN. (Microsoft Coding be like)
    closestAdSpotOutput = 'false';
    return;
}






/***************************************************************************/
// func realTimeListeners()
// Called By rent.html
// Adds real time listeners to calculate the price of the add spot when the user makes a change to the text boxes
/***************************************************************************/

function realTimeListeners() {

    /***************************************************************************/
    // uDays.addEventListener
    // Validates the spot wanted and days wanted when the user makes a 
    // change to the purchase length text box. 
    // It then calculates the total cost based off 
    // formUserDays / formUserSpot * 10 (rounded)
    /***************************************************************************/

    uDays.addEventListener('input', function() {
        if (document.getElementById('uDays').checkValidity()) {
            formUserDays = document.forms["fUserDetails"]["uDays"].value; 
            formUserSpot = document.forms["fUserDetails"]["uSpot"].value; 
        }
        if (isFinite(formUserDays / formUserSpot * 10) === false) {
            document.getElementById('totalPrice').textContent = 'Your total cost cannot be calculated!';
            document.getElementById('totalPrice').style.color = 'red';
        } else {
            document.getElementById('totalPrice').textContent = 'Your total cost will be: $ ' + Math.round(formUserDays / formUserSpot * 10);
            document.getElementById('totalPrice').style.color = 'black';
        }
    });






    /***************************************************************************/
    // uSpot.addEventListener
    // Validates the spot wanted and days wanted when the user makes a 
    // change to the ad spot text box. 
    // It then calculates the total cost based off 
    // formUserDays / formUserSpot * 10 (rounded)
    /***************************************************************************/

    uSpot.addEventListener('input', function() {   
        if (document.getElementById('uSpot').checkValidity()) {
            formUserDays = document.forms["fUserDetails"]["uDays"].value; 
            formUserSpot = document.forms["fUserDetails"]["uSpot"].value; 
        }
        if (isFinite(formUserDays / formUserSpot * 10) === false) {
            document.getElementById('totalPrice').textContent = 'Your total cost cannot be calculated!';
            document.getElementById('totalPrice').style.color = 'red';
        } else {
            document.getElementById('totalPrice').textContent = 'Your total cost will be: $ ' + Math.round(formUserDays / formUserSpot * 10);
            document.getElementById('totalPrice').style.color = 'black';
        }
    });
}






/***************************************************************************/
// func debugRemoveAd()
// Called By main() but commented out
// removes the ad in the spot specified in () this should only run for 
// debugging and will normally not be called.
/***************************************************************************/

function debugRemoveAd(spot) {
    adSpotArray[spot].available = true;
    adSpotArray[spot].text = 'Spot ' + adSpotArray[spot].spot;
    adSpotArray[spot].link = '';
    adSpotArray[spot].dayPurchased = 0;
    adSpotArray[spot].purchaseLength = 0;

    storeAdSpotArray();
}