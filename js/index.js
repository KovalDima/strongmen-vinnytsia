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

accordion(".questions__item-head");

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

// auto copyrigth year
const year = document.querySelector(".footer__copy span");
year.textContent = new Date().getFullYear();
