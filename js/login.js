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
  
    // Validate password
    function validatePassword(password) {
      const length = /[a-zA-Z0-9!@#$%^&*()_+]{8,}/;
      const capital = /[A-Z]/;
      const number = /[0-9]/;
      const special = /[!@#$%^&*(),.?":{}|<>]/;
  
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
  
    $("#password").on("input", function () {
      $("#passwordFeedback").show();
      if (validatePassword($(this).val())) {
        $("#passwordFeedback").hide();
      }
    });
  
    // Add event listener for input on name and email fields to remove invalid feedback on re-input
    $("#name, #email").on("input", function () {
      $(this).removeClass("is-invalid");
      $(this).next(".invalid-feedback").hide();
    });
  
    // Form submission validation
    $("#loginForm").on("submit", function (event) {
      const name = $("#name").val();
      const email = $("#email").val();
      const password = $("#password").val();
      let isValid = true;
  
      if (name.trim() === "") {
        $("#nameFeedback").text("Name is required").show();
        $("#name").addClass("is-invalid");
        isValid = false;
      } else {
        $("#nameFeedback").hide();
        $("#name").removeClass("is-invalid");
      }
  
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
  
      if (!validatePassword(password)) {
        $("#passwordFeedback").show();
        isValid = false;
      } else {
        $("#passwordFeedback").hide();
      }
  
      if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
  
      return isValid;
    });
  });
  