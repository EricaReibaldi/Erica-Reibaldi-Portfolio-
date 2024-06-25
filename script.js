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
});
  
