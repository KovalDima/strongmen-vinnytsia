pageUp();
accordion(".questions__item-head");

// auto copyrigth year
const year = document.querySelector(".footer__copy span");
year.textContent = new Date().getFullYear();

// testimonials slider
const testimonialsSlider = new Swiper(".testimonials__slider", {
  slidesPerView: 3.3,
  spaceBetween: 30,
  autoHeight: false,
  pagination: {
    el: ".testimonials__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
  },
});

// functions

function pageUp() {
  const pageUp = document.querySelector(".page-up");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > window.innerHeight) {
      pageUp.classList.add("show");
    } else {
      pageUp.classList.remove("show");
    }
  });

  pageUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function accordion(className) {
  let accBtn = document.querySelectorAll(className);

  for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let accPanel = this.nextElementSibling;
      if (accPanel.style.maxHeight) {
        accPanel.style.maxHeight = null;
        accPanel.style.marginBottom = null;
      } else {
        accPanel.style.maxHeight = `${accPanel.scrollHeight}px`;
        accPanel.style.marginBottom = "30px";
      }
    });
  }
}
