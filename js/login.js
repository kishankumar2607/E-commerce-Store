$(document).ready(function () {
  // Toggle password visibility
  $(".toggle-password").on("click", function () {
    let passwordField = $("#password");
    let passwordFieldType = passwordField.attr("type");
    if (passwordFieldType === "password") {
      passwordField.attr("type", "text");
      $(this).removeClass("bi-eye-fill").addClass("bi-eye-slash-fill");
    } else {
      passwordField.attr("type", "password");
      $(this).removeClass("bi-eye-slash-fill").addClass("bi-eye-fill");
    }
  });

  // Dynamic greeting based on the time of day
  function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
      greeting = "Good Morning!";
    } else if (hours < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }

    $("#greeting").text(greeting);
  }

  updateGreeting();

  // Validate email using regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Validate password based on multiple criteria
  function validatePassword(password) {
    const length = /[a-zA-Z0-9!@#$%^&*()_+]{8,}/; // At least 8 characters
    const capital = /[A-Z]/; // At least one uppercase letter
    const number = /[0-9]/; // At least one number
    const special = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    let isValid = true;

    if (length.test(password)) {
      $("#length").addClass("valid");
    } else {
      $("#length").removeClass("valid");
      isValid = false;
    }

    if (capital.test(password)) {
      $("#capital").addClass("valid");
    } else {
      $("#capital").removeClass("valid");
      isValid = false;
    }

    if (number.test(password)) {
      $("#number").addClass("valid");
    } else {
      $("#number").removeClass("valid");
      isValid = false;
    }

    if (special.test(password)) {
      $("#special").addClass("valid");
    } else {
      $("#special").removeClass("valid");
      isValid = false;
    }

    return isValid;
  }

  // Show or hide password feedback based on validation
  $("#password").on("input", function () {
    $("#passwordFeedback").show();
    if (validatePassword($(this).val())) {
      $("#passwordFeedback").hide();
    }
  });

  // Remove invalid feedback when the user re-enters data in the name and email fields
  $("#name, #email").on("input", function () {
    $(this).removeClass("is-invalid");
    $(this).next(".invalid-feedback").hide();
  });

  // Validate that the name does not contain numbers
  function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    return regex.test(name);
  }

  // Form submission validation
  $("#loginForm").on("submit", function (event) {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    let isValid = true;

    // Validate the name field
    if (name.trim() === "") {
      $("#nameFeedback").text("Name is required").show();
      $("#name").addClass("is-invalid");
      isValid = false;
    } else if (!validateName(name)) {
      $("#nameFeedback")
        .text("Name cannot contain numbers or special characters")
        .show();
      $("#name").addClass("is-invalid");
      isValid = false;
    } else {
      $("#nameFeedback").hide();
      $("#name").removeClass("is-invalid");
    }

    // Validate the email field
    if (email.trim() === "") {
      $("#emailFeedback").text("Email is required").show();
      $("#email").addClass("is-invalid");
      isValid = false;
    } else if (!validateEmail(email)) {
      $("#emailFeedback").text("Please enter a valid email address").show();
      $("#email").addClass("is-invalid");
      isValid = false;
    } else {
      $("#emailFeedback").hide();
      $("#email").removeClass("is-invalid");
    }

    // Validate the password field
    if (!validatePassword(password)) {
      $("#passwordFeedback").show();
      isValid = false;
    } else {
      $("#passwordFeedback").hide();
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }

    return isValid;
  });
});
