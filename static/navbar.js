var prevScrollY = window.scrollY;
var topbar = document.getElementById("navbar");
var initialScroll = true;

// Show taskbar every time page is opened
window.onpageshow = () => {
    topbar.style.top = "0";
    topbar.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.9)";
}

window.onscroll = () => {
    // Avoid scroll event being automatically triggered by browser
    if (!initialScroll) {
        var currScrollY = window.scrollY;

        // When usr scrolls up, don't hide navbar
        if (prevScrollY > currScrollY) {
            topbar.style.top = "0";
            topbar.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.9)";
        // Otherwise hide navbar
        } else {
            topbar.style.top = "-80px";
            topbar.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.0)";
        }
    
        prevScrollY = currScrollY;
    }
    
    initialScroll = false;
}

navlinks = document.getElementsByClassName("navlink");
