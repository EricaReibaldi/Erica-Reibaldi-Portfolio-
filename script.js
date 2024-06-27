// scripts.js

function popup() {
  var popup = document.getElementById("popup");
  if (popup.style.display == "block") {
      popup.style.display = "none";
  } else {
      popup.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function() {
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex2);
});

let slideIndex = 1;

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}


let slideIndex2 = 1;


function plusSlides2(n) {
showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
let i;
let slides = document.getElementsByClassName("mySlides2");
let dots = document.getElementsByClassName("dot2");
if (n > slides.length) {slideIndex2 = 1}
if (n < 1) {slideIndex2 = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex2-1].style.display = "block";  
dots[slideIndex2-1].className += " active";
}


let slideIndex3 = 1;


function plusSlides3(n) {
showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
let i;
let slides = document.getElementsByClassName("mySlides3");
let dots = document.getElementsByClassName("dot3");
if (n > slides.length) {slideIndex3 = 1}
if (n < 1) {slideIndex3 = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex3-1].style.display = "block";  
dots[slideIndex3-1].className += " active";
}

