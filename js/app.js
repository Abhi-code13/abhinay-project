const hamburger = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// swiper viewed

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mostViewedSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 3, 
      },
      991: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      0 : {
        slidesPerView: 1,
      },
    }
  });
});