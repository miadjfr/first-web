const nav = document.querySelector(".mobile-nav"),
    navMenuBtn = document.querySelector(".nav-menu-btn"),
    navCloseBtn = document.querySelector(".nav-close-btn")


const navTogglefunc = () => nav.classList.toggle("active");
navMenuBtn.addEventListener("click",navTogglefunc)
navCloseBtn.addEventListener("click",navTogglefunc)


const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < 100; i++) {
  themeBtn[i].addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let j = 0; j < 100; j++) {
      themeBtn[j].classList.toggle("light");
      themeBtn[j].classList.toggle("dark");
    }
  });
}
