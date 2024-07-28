$(document).ready(function() {
    // Initialize image slider
    $('#slider').slider();

    // Contact form validation
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
        if (name && email && message) {
            alert('Thank you for your message!');
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Initialize accordion on about page
    $('#accordion').accordion();

    // Placeholder for dynamic cart items
    let cartItems = [
        { name: 'Product 1', price: 29.99 },
        { name: 'Product 2', price: 39.99 }
    ];

    let $orderSummary = $('#orderSummary');
    cartItems.forEach(item => {
        $orderSummary.append(`<p>${item.name} - $${item.price.toFixed(2)}</p>`);
    });

    $('#checkoutForm').on('submit', function(event) {
        event.preventDefault();
        alert('Order placed successfully!');
    });
});
