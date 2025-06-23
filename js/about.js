$(document).ready(function(){
  $('.nav-toggler').click(function(){
    $('.navbar-collapse').slideToggle(1000);
  });
});

AOS.init();


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

// Number counter

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