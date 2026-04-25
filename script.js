let slideIndex = 1;

// Requirement: Function for slide control
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Wrap around logic
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // Requirement: Use a 'for' statement to hide slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Display the active slide
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";  
  }
}

// Requirement: Auto-play functionality
setInterval(function() {
  plusSlides(1);
}, 5000);

// Initialize the first slide
showSlides(slideIndex);