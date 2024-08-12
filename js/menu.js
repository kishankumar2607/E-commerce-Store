// For hover effect on top cuisines
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.cuisines .item img').forEach((image) => {
        
        image.addEventListener('mouseenter', (event) => {
            event.target.style.transform = 'scale(1.1)';
            event.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });

        image.addEventListener('mouseleave', (event) => {
            event.target.style.transform = 'scale(1)';
            event.target.style.boxShadow = 'none';
        });
    });

// Horiontal button slider
// Selecting all containers and scroll buttons 
const scrollContainers = document.querySelectorAll('.scroll-container');
const scrollLeftButtons = document.getElementsByClassName('scroll-left');
const scrollRightButtons = document.getElementsByClassName('scroll-right');
const itemWidth = 300; 
const spacing = 300; 
const scrollAmount = itemWidth + spacing;
// adding click event for scroll left and scroll right buttons
scrollContainers.forEach((container, index) => {
    scrollLeftButtons[index].addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
scrollRightButtons[index].addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
        });
    });
});


// hover effect for add to cart button
document.querySelectorAll('.add-to-cart').forEach((button) => {
        
    button.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'yellow';
        event.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });

    button.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.backgroundColor = 'orangered';
        event.target.style.color = 'white';
        event.target.style.boxShadow = 'none';
    });
});

// function to scrool into particular section when clicked on the cuisines image
function scrollToSection(classname){
    var section = document.querySelector('.'+ classname);
    var sectionTop = section.getBoundingClientRect().top + window.scrollY;
    var windowHeight = window.innerHeight;
    var scrollToPosition = sectionTop - (windowHeight / 2) + (section.offsetHeight / 2);
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'})
        ;}
// uses previously coded function for navigation
document.getElementById('asian').onclick = function() {scrollToSection('asian');};
document.getElementById('american').onclick = function() {scrollToSection('Popular');};
document.getElementById('indian').onclick = function() {scrollToSection('indian');};
document.getElementById('steak').onclick = function() {scrollToSection('steak');};
document.getElementById('mexican').onclick = function() {scrollToSection('mexican');};
document.getElementById('japanese').onclick = function() {scrollToSection('japanese');};


});