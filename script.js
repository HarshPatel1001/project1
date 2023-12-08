//This Javascript code creates a simple image slider

// Declare a variable which is starting at index 0.
let slideIndex = 0;

// Function to show slides in the slideshow.
function showSlides() {
    // To get all elements from the class "foot" 
    const slides = document.getElementsByClassName("car");

    // Hide the slides (by setting their display property to "none").
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // To reset to the first slide if the new slide index is more than the total number of slides,
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide 
    slides[slideIndex - 1].style.display = "block";

    // To call the showSlides function again after a delay of 2000 milliseconds (2 seconds).
    setTimeout(showSlides, 2000);
}

// To call the showSlides function after the window has finished loading.
window.onload = showSlides;