// LOGIC FOR SPINNER RENDERING/ REMOVING
document.addEventListener("DOMContentLoaded", () => {
  const spinnerContainer = document.querySelector(".spinner-container");
  spinnerContainer.classList.add("active");
  document.body.style.overflow = "hidden";

  //   FORCING SPINNER TO APPEAR FOR 2 SECOND, AS THIS WEBSITE DOESN'T GIVE A CHANGE TO RENDER THE SPINNER
  setTimeout(() => {
    spinnerContainer.classList.remove("active");
    document.body.style.overflow = "auto";
  }, 2000);

  // CORRECT LOGIC FOR REMOVING SPINNER
  //   window.addEventListener("load", () => {
  //     spinnerContainer.classList.remove("active");
  //   });
});

// LOGIC FOR FAQS SECTION
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      console.log(i);

      if (i !== item) {
        i.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});

$(document).ready(function () {
  // TO AVOID RELOAD ON FORM SUBMISSION
  $(".fixed-from").on("submit", (e) => e.preventDefault());

  // TO TOGGLE SIDEBAR WHEN CLICK ON MOBILE MENU ICON
  $("#mobile-menu-icon").on("click", () =>
    $("#mobile-menu").toggleClass("active")
  );

  // TO CLOSE SIDE BAR WHEN CLICK ON LI OR CROSS ICON
  $(".mobile-menu li, .mobile-menu a, #cross-icon").on("click", function () {
    $("#mobile-menu").removeClass("active");
  });

  //  OWL CAROUSEL LOGIC

  $(".owl-carousel-1").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    dots: true,
    items: 1,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
        loop: false,
      },
    },
  });
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
  $(".owl-carousel-3").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
});
