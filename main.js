
let swiperInstance; 

function initSwiper() {
  
  if (window.innerWidth < 768 && !swiperInstance) {
    
    swiperInstance = new Swiper(".swiper", {
      
      direction: "horizontal",
      loop: true,
      
      slidesPerView: "auto",

    
      pagination: {
        el: ".swiper-pagination",
      },

      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  } else if (window.innerWidth >= 767 && swiperInstance) {
    
    swiperInstance.destroy(true, true);
    swiperInstance = null; 
  }
}


document.addEventListener("DOMContentLoaded", initSwiper);


window.addEventListener("resize", initSwiper);

var wrapperLogoDesctop = document.querySelectorAll(".desctop__table");
var wrapperLogoHidden = document.querySelectorAll(".hidden");
var wrapperLogo = document.querySelectorAll(".hidden, .desctop__table");

var button = document.querySelector(".button-open");
var buttonClose = document.querySelector(".button-close");

button.addEventListener("click", function () {
  for (var i = 0; i < wrapperLogo.length; i++) {
    wrapperLogo[i].classList.remove("desctop__table", "hidden");
  }
  button.classList.add("hidden");
});

buttonClose.addEventListener("click", function () {
  for (var i = 0; i < wrapperLogoHidden.length; i++) {
    wrapperLogoHidden[i].classList.add("hidden");
  }
  for (var i = 0; i < wrapperLogoDesctop.length; i++) {
    wrapperLogoDesctop[i].classList.add("desctop__table");
  }

  buttonClose.classList.add("hidden");
  button.classList.remove("hidden");
});
