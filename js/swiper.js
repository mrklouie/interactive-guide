const swiper = new Swiper(".interactive-guide-carousel", {
  slidesPerView: 1,
  speed: 500,

  mousewheel: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: "#button-next",
    prevEl: "#button-prev",
  },

  on: {
    reachEnd: function () {
      alert("You've already reached the final step of this tutorial");
      location.href = "/";
    },
  },
});
