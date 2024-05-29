
// functions to fix the jumping arround when a button is pressed on mobile
// Function to detect if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Function to update link behavior
function updateLinkBehavior(selector, hrefDesktop, hrefMobile) {
    const link = document.querySelector(selector);

    if (link) {
        if (isMobileDevice()) {
            link.setAttribute('href', hrefMobile + '#targetmobile');
        } else {
            link.setAttribute('href', hrefDesktop);
        }
    }
}

// Call the function for each link
document.addEventListener("DOMContentLoaded", function () {
    updateLinkBehavior('#jsresume', 'resume.html', 'resume.html');
    updateLinkBehavior('#jshome', 'index.html', 'index.html');
    updateLinkBehavior('#jscontact', 'contact.html', 'contact.html');
});