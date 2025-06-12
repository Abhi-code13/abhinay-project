const hamburger = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// swiper viewed

document.addEventListener("DOMContentLoaded", function () {
  // Swiper 1 - Most Viewed
  var swiper1 = new Swiper(".mostViewedSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      1300: { slidesPerView: 3 },
      991: { slidesPerView: 2 },
      768: { slidesPerView: 1 },
      0: { slidesPerView: 1 }
    }
  });

  // Swiper 2 - Testimonials
  var swiper2 = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 5,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Swiper 3 - Blogs Card
  var blogSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

});