
// Add event listener on the nav-list then grab the item clicked
navList.addEventListener("click", function (e) {
    //Grabs the clicked element
    let clickedElement = e.target;
    //If the clicked item has a class of nav-link at index 0 then do something
    if (clickedElement.classList[0] === "nav-link") {
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
