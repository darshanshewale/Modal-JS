("use strict");
// import "core.js";
// import "regenerator-runtime/runtime";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// this will display modal as well overlay by removing hidden class from modal  and overlay element content
const displaymodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// this will remove the modal by adding hidden class to modal as well as to overlay
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// btn openmodal consist nodelist so onclick to any button will excute displaymodal method

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", displaymodal);
}

btnclosemodal.addEventListener("click", closemodal);

// btnclosemodal.addEventListener("click", function () {
//   console.log("button clicked", i);
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
overlay.addEventListener("click", closemodal);

// overlay.addEventListener("click", function () {
//   console.log("button clicked", i);
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

document.addEventListener("keydown", function (esc) {
  console.log(esc);
  if (esc.key == "Escape" && !modal.classList.contains("hidden")) {
    display();
  }
});
