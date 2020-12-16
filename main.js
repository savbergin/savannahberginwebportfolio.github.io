const bodyElement = root.querySelector('body');
const menuToggle = root.querySelector('.hamburger-menu');
//Do later
const navList = root.querySelector('.nav-list');
//Do later
const heroElement = root.querySelector('.heroindex');
const heroElement = root.querySelector('.heropc');
const heroElement = root.querySelector('.heroFIMD');
const heroElement = root.querySelector('.heroFOID');
const heroElement = root.querySelector('.heroAudacity');
const heroElement = root.querySelector('.heroPhotography');

//Add event listener to the hamburger menu to toggle nav on and off and switch icons
menuToggle.addEventListener('click', fuction () {
    bodyElement.classList.toggle('is-open');
    //Do later
    heroElement.classList.add('is-open');
});

// Add event listener on the nav-list then grab the item clicked
navList.addEventListener("click", function (e) {
    //Grabs the clicked element
    clickedElement = e.target;
    //If the clicked item has a class of nav-link at index 0 then do something
    (clickedElement.classList[0] === "nav-link") {
        bodyElement.classList.remove('is-open');
    }
});
/*
Add event listener to the window object then check if the
element clicked contains the class is-open.
If so then remove it from both the body and hero to close
the nav and remove the dark content overlay
*/
window.addEventListener('click', function (e) {
    //Grabs the clicked element
    let clickedElement = e.target;
    //If the clicked element matches the class then do something
    if (clickedElement.matches('.is-open')) {
        bodyElement.classList.remove('is-open');
        heroSection.classList.remove('is-open');
    }
});