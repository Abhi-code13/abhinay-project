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

const counters = document.querySelectorAll(".counter");
  let hasAnimated = false;

  const startCounting = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace(/[^\d]/g, ''); // Remove "K", "%" etc.
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment) + getSuffix(counter.innerText);
          setTimeout(updateCount, 10);
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