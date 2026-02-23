// search // 
const icon = document.querySelector(".search-icon");
const box = document.querySelector(".search-box");

icon.addEventListener("click", () => {
  box.classList.toggle("active");
});

/*gsap*/
gsap.from("#CokeFlavors h2", {
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from(".coke-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
