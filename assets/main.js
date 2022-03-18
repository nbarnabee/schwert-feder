const menuBtn = document.querySelector(".logo"),
  navMenu = document.querySelector(".main-menu"),
  dropLinks = document.querySelectorAll(".menu-link");
  
menuBtn.addEventListener("click", toggleNav);
dropLinks.forEach(element => element.addEventListener('click', toggleNav));

function toggleNav() {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  };