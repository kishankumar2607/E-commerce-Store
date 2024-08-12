$(document).ready(function () {
  // Initialize the Slick carousel for the .dishes element
  $(".dishes").slick({
    infinite: true, // Enables infinite scrolling
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 3, // Number of slides to scroll at once
    arrows: false, // Disable the default arrows
    responsive: [
      {
        breakpoint: 992, // Screen width of 992px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 2, // Scroll 2 slides
        },
      },
      {
        breakpoint: 768, // Screen width of 768px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide
        },
      },
    ],
  });

  // Handle the click event for the Next button
  $("#nextBtn").click(function () {
    $(".dishes").slick("slickNext");
  });

  // Handle the click event for the Previous button
  $("#prevBtn").click(function () {
    $(".dishes").slick("slickPrev");
  });
});
