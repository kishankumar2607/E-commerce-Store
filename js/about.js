"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Image rollover effect
    const images = document.querySelectorAll(".worker img");

    // Preload rollover images
    const preloadImages = [];
    images.forEach(image => {
        const rolloverSrc = image.getAttribute("data-rollover");
        if (rolloverSrc) {
            const newImage = new Image();
            newImage.src = rolloverSrc; 
            preloadImages.push(newImage);
        }
    });

    // Set up event handlers for hovering over an image
    images.forEach(image => {
        const oldSrc = image.src;
        const rolloverSrc = image.getAttribute("data-rollover");

        image.addEventListener("mouseover", () => {
            if (rolloverSrc) {
                image.src = rolloverSrc;
            }
        });
        image.addEventListener("mouseout", () => {
            image.src = oldSrc;
        });
    });

    // jQuery form validation
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();
        let isValid = true;

        // validation
        if (name === '') {
            alert('Name is required.');
            isValid = false;
        }

        if (email === '') {
            alert('Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (message === '') {
            alert('Message is required.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Initialize sortable for testimonials
    $('.testimonials').sortable({
        items: '.testimonial',
        cursor: 'move',
        opacity: 0.7
    });
});
