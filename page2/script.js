// The base code was copied from W3Schools, It was significantly edited by me (I understand it and could probably explain it)

// Get the root element
var r = document.querySelector(':root');
        
function myFunction_set_dark() {
    localStorage.setItem("dark", "0");
    myFunction_get_theme();
}

function myFunction_set_light() {
    localStorage.setItem("dark", "1");
    myFunction_get_theme();
}

function myFunction_get_theme() {
    if (localStorage.getItem("dark") === "1") {
        r.style.setProperty('--selected', '#2D0922');
        r.style.setProperty('--active', '#2D0922');
        r.style.setProperty('--background', '#246f9f');
        r.style.setProperty('--transBackground', '#6996cc66');
        r.style.setProperty('--backgroundImage', "url('/page2/images/blueBackground.png')");
    } else {
        r.style.setProperty('--selected', '#6995CC');
        r.style.setProperty('--active', '#8ADB2E');
        r.style.setProperty('--background', '#2D0922');
        r.style.setProperty('--transBackground', '#2D0922bd');
        r.style.setProperty('--backgroundImage', "url('/page2/images/normalBackground.jpg')");
    }
}
