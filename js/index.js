togglePageUp();
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    900: {
      slidesPerView: 2.4,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 2.8,
    },
    1800: {
      slidesPerView: 3.3,
    },
  },
});

// gallery slider
const galleryThumbs = new Swiper(".gallery__slider-thumbs", {
  spaceBetween: 10,
  slidesPerView: 6.3,
  freeMode: true,
  watchSlidesProgress: true,
});

const gallerySlider = new Swiper(".gallery__slider", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

// functions

function togglePageUp() {
  const pageUp = document.querySelector(".page-up");
  const orderLink = document.querySelector(".order-link");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > window.innerHeight) {
      pageUp.classList.add("show");
      orderLink.classList.add("above");
    } else {
      pageUp.classList.remove("show");
      orderLink.classList.remove("above");
    }
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
