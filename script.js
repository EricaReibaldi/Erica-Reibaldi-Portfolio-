// scripts.js

function popup() {
    var popup = document.getElementById("popup");
    if (popup.style.display == "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', () => 
  document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript file loaded");
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('menu');
  
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  })
);
  
