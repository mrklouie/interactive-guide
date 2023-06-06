//Variables
const query = matchMedia("(max-width: 1023px)");
const svgEl = document.querySelectorAll(".webportal-screen");
const animateThisEl = document.getElementById("animate-this");

//Objects
const viewBoxSizes = {
  original: "0 0 1018 805",
  mobileLandscape: "0 0 1025 600",
};

//Functions
function changeViewBox() {
  if (query.matches) {
    svgEl.forEach((svg, index) => {
      if (index === 0) {
        gsap.fromTo(
          svg,
          { attr: { viewBox: "-250 0 1525 800" } },

          {
            delay: 1.5,
            attr: { viewBox: viewBoxSizes.mobileLandscape },
            duration: 1.5,
          }
        );
      } else {
        svg.setAttribute("viewBox", viewBoxSizes.mobileLandscape);
      }
    });
  } else {
    svgEl.forEach((svg) => {
      svg.setAttribute("viewBox", viewBoxSizes.original);
    });
  }
}

window.addEventListener("resize", changeViewBox);

//Executions
changeViewBox();
