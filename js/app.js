

$(document).ready(function(){
  $('.nav-toggler').click(function(){
    $('.navbar-collapse').slideToggle(1000);
  });
});



// const hamburger = document.querySelector('.nav-toggler');
// const navMenu = document.querySelector('.navbar-collapse');

// hamburger.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });


// swiper viewed

document.addEventListener("DOMContentLoaded", function () {

  // banner-swiper

  var swiper = new Swiper(".hero-swiper", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true, // Optional: smooth transition between slides
    },
  });





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
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      }
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
      0:{
        slidesPerView : 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
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

const counters = document.querySelectorAll(".counter");
let hasAnimated = false;

const startCounting = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/[^\d]/g, ''); // Remove "K", "%" etc.
      const increment = target / 1000;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + getSuffix(counter.innerText);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target + getSuffix(counter.innerText);
      }
    };
    updateCount();
  });
};

const getSuffix = (text) => {
  if (text.includes("K")) return "K";
  if (text.includes("%")) return "%";
  if (text.includes("+")) return "+";
  return "";
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        startCounting();
        hasAnimated = true;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const section = document.querySelector(".numbers"); // <-- FIXED
if (section) observer.observe(section);