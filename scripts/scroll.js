//Scroll to top function

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
// When the user scrolls down 80px from the top of the document
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("upBtn").style.display = "block"; //Show button
  } else {
    document.getElementById("upBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}