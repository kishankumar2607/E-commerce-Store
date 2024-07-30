// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove active class from all links
function removeActiveClass() {
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
}

// Function to add active class to the current link
function setActiveClass() {
  const currentUrl = window.location.pathname;
  navLinks.forEach((link) => {
    if (link.href.includes(currentUrl)) {
      link.classList.add('active');
    }
  });
}

// Remove active class from all links and add active class to the current link on page load
document.addEventListener('DOMContentLoaded', () => {
  removeActiveClass();
  setActiveClass();
});

// Remove active class from all links and add active class to the clicked link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active');
  });
});