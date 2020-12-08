$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
})
var reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
});

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("navbar-bottom__visible");
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom__visible");
});

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("navbar-bottom__scroll");
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom__scroll");
});

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("chudo da i tolko");
  document.querySelector(".body-pt")
  .classList.toggle("body-pt-scroll-none");
});

var modalButton = $("[data-toggle=modal]")
var closeModalButton = $(".modal__close")
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal)  

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody  = $(".body-pt");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    modalBody.addClass("body-pt-scroll-none");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody  = $(".body-pt");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    modalBody.removeClass("body-pt-scroll-none");
  }
});