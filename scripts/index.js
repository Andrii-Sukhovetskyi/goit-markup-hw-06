document.querySelector(".menu-btn").onclick = function () {
  document.querySelector(".mobil-menu").classList.add("is-open");
};

document.querySelector(".btn-close").onclick = function () {
  document.querySelector(".mobil-menu").classList.remove("is-open");
};

document.querySelector(".button").onclick = function () {
  document.querySelector(".modal-overlay").classList.add("is-open");
};

document.querySelector(".btn-close-modal").onclick = function () {
  document.querySelector(".modal-overlay").classList.remove("is-open");
};
