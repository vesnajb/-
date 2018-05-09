window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var slideIndex = 0;
showSlides();
var slides,dots;

function currentSlide(index) {
    if (index > slides.length) {
        index = 1}
    else if(index < 1){
        index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
          }
        slides[index-1].style.display = "flex";  
        dots[index-1].className += " active";

   }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < 3; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > 3) {
        slideIndex = 1;
    }    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

var slideI = 1;
showDivs(slideI);

function plusDivs(n) {
  showDivs(slideI += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideI = 1}    
  if (n < 1) {slideI = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideI-1].style.display = "block";  
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}