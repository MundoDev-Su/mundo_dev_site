// assets/js/swiper-clients.js

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".init-swiper", {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 30 },
      480: { slidesPerView: 3, spaceBetween: 40 },
      640: { slidesPerView: 4, spaceBetween: 50 },
      992: { slidesPerView: 5, spaceBetween: 60 },
      1200: { slidesPerView: 6, spaceBetween: 80 }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".feCarousel", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide"
  });
});