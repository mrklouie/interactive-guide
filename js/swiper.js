//Variables

const isMobile = matchMedia(
  "(max-width: 1023px) and (orientation: landscape)"
).matches;
const svgEl = document.querySelectorAll(".webportal-screen");
const ctrlBtns = document.querySelectorAll(".footer-contents-wrapper__btn");
const mainScreen = document.querySelector(".interactive-guide-carousel");

//Objects
const viewBoxSizes = {
  original: "0 0 1018 805",
  mobileLandscape: "0 0 1025 600",
};

const interactiveGuideCarousel = new Swiper(".interactive-guide-carousel", {
  slidesPerView: 1,
  speed: 500,
  allowTouchMove: false,
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

    init: function () {
      mainScreen.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
});

//===================ViewBoxes===================//

//Functions

function enableBtns() {
  ctrlBtns.forEach((button) => {
    button.classList.add("active");
  });
}

function changeViewBox() {
  svgEl.forEach((svg) => svg.classList.add("active"));

  if (isMobile) {
    gsap.fromTo(
      svgEl[0],
      { attr: { viewBox: "-250 0 1525 800" } },

      {
        delay: 2,
        attr: { viewBox: viewBoxSizes.mobileLandscape },
        duration: 1.5,
        onComplete: function () {
          interactiveGuideCarousel.allowTouchMove = true;
          enableBtns();
          svgEl.forEach((svg, index) => {
            if (index === 0) return;
            svg.setAttribute("viewBox", viewBoxSizes.mobileLandscape);
          });
        },
      }
    );
  } else {
    svgEl.forEach((svg) => {
      svg.setAttribute("viewBox", viewBoxSizes.original);
    });
  }
}

function loadSvg() {
  svgEl.forEach((svg) => {
    svg.addEventListener("load", () => {
      console.log("Loaded");
      mainScreen.scrollIntoView({ behavior: "smooth", block: "start" });
      changeViewBox();
    });
  });
}

window.addEventListener("resize", () => {
  location.reload();
  changeViewBox();
});

//Executions
loadSvg();
