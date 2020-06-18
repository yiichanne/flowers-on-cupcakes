//Slideshow carousel functions

var slideNum = 1;
var timer;
//Initialise slideshow
window.addEventListener("load", function () {
  showSlides(slideNum);
  timer = setInterval(function () { plusSlides(1) }, 3000);
});

// Next/previous controls
//Initialise slideshow to go forward/back
function plusSlides(n) {
  clearInterval(timer); //Reset/clear interval
  if (n < 0) {
    showSlides(slideNum -= 1); //Show previous slide
  } else {
    showSlides(slideNum += 1); //Show next slide
  }
  //Set new interval where plusSlides() executed every 3 sec
  if (n == -1) { //To set n as positive so slideNum will increase & show next slide
    timer = setInterval(function () { plusSlides(n + 2) }, 3000);
  } else {
    timer = setInterval(function () { plusSlides(n + 1) }, 3000);
  }
}

// Control current slide via dots
function currentSlide(n) {
  clearInterval(timer);
  timer = setInterval(function () { plusSlides(n + 1) }, 3000);
  showSlides(slideNum = n);
}

//Determines which slide to show/hide
function showSlides(slideNo) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); //Get imgs/slides, store in array
  var dots = document.getElementsByClassName("dot"); //Store dots in array
  //validate so will loop within range
  if (slideNo > slides.length) { slideNum = 1 } //Loop back to 1 when > num of images (Last img loops to 1st img)
  if (slideNo < 1) { slideNum = slides.length } //When going to prev img from 1st image -> loop to last img
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //Set display to none for all imgs
  }
  for (i = 0; i < dots.length; i++) { //Reset all .activeDot
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideNum - 1].style.display = "block"; //Set img no. n (index n-1) to display as block
  dots[slideNum - 1].className += " activeDot"; //Set dot for img no. n to .activeDot to enable .activeDot styles
}

//Show/hide previous & next buttons when hover
function showButtons() {
  document.getElementsByClassName("slideshow-container")[0].className += " active"; //Add active into class to activate style that shows button
}

function hideButtons() {
  var slideshowContainer = document.getElementsByClassName("slideshow-container")[0]; 
  slideshowContainer.className = slideshowContainer.className.replace(" active", ""); //Remove active to activate style that hides button

}