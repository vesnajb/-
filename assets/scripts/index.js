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
    
    for (i = 0; i < 2; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > 2) {
        slideIndex = 1;
    }    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
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