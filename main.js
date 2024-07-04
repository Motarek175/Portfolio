// up to top
let up = document.querySelector(".up");

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 400) {
    up.style.transform = "scale(1)";
  } else {
    up.style.transform = "scale(0)";
  }
};

up.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// header toggle menu
let toggle = document.querySelector(".header .container i");
let links = document.querySelector(".header .container .links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

// landing
let me = ["Frontend Developer", "Software Engineer"];
let txt = document.querySelector(".landing .container .text h2 span ");
let index = 0;

function rand() {
  txt.innerHTML = me[index];
  index++;
  if (index == me.length) {
    index = 0;
  }
  setTimeout(rand, 2000);
}
rand();
