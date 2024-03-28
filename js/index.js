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
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});
