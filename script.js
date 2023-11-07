function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

var paragraphs = document.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.toggle("dark-mode-paragraph");
}

var experienceElement = document.getElementById('experience');
 experienceElement.classList.toggle("dark-mode-experience");
}

