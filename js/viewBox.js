// setTimeout(() => {
//   const mainScreen = document.querySelector(".interactive-guide-carousel");

//   mainScreen.scrollIntoView(true, { behavior: "smooth" });

//   console.log("dONE");
// }, 5000);

// //Variables
// const query = matchMedia("(max-width: 1023px) and (orientation: landscape)");
// const svgEl = document.querySelectorAll(".webportal-screen");
// const ctrlBtns = document.querySelectorAll(".footer-contents-wrapper__btn");
// //Objects
// const viewBoxSizes = {
//   original: "0 0 1018 805",
//   mobileLandscape: "0 0 1025 600",
// };

// //Functions

// function enableBtns() {
//   ctrlBtns.forEach((button) => {
//     button.classList.add("active");
//   });
// }

// function changeViewBox() {
//   svgEl.forEach((svg) => svg.classList.add("active"));

//   if (query.matches) {
//     console.log("Started");
//     gsap.fromTo(
//       svgEl[0],
//       { attr: { viewBox: "-250 0 1525 800" } },

//       {
//         delay: 1.5,
//         attr: { viewBox: viewBoxSizes.mobileLandscape },
//         duration: 1.5,
//         onComplete: function () {
//           enableBtns();
//           svgEl.forEach((svg, index) => {
//             if (index === 0) return;
//             svg.setAttribute("viewBox", viewBoxSizes.mobileLandscape);
//           });
//         },
//       }
//     );
//   } else {
//     svgEl.forEach((svg) => {
//       svg.setAttribute("viewBox", viewBoxSizes.original);
//     });
//   }
// }

// function loadSvg() {
//   svgEl.forEach((svg) => {
//     svg.addEventListener("load", () => {
//       changeViewBox();
//     });
//   });
// }

// window.addEventListener("resize", changeViewBox);

// //Executions
// loadSvg();
