
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

// let wrapperLogoDesctop = document.querySelectorAll(".desctop__table");
// let wrapperLogoHidden = document.querySelectorAll(".hidden");
// let wrapperLogo = document.querySelectorAll(".hidden, .desctop__table");

// let button = document.querySelector(".button-open");


// button.addEventListener("click", function () {
//   for (var i = 0; i < wrapperLogo.length; i++) {
//     wrapperLogo[i].classList.remove("desctop__table", "hidden");
//   }
//   button.textContent = 'Скрыть';
//   button.classList.add("button-close");
// });
// var buttonClose = document.querySelector(".button-close");
// buttonClose.addEventListener("click", function () {
//   for (var i = 0; i < wrapperLogoHidden.length; i++) {
//     wrapperLogoHidden[i].classList.add("hidden");
//   }
//   for (var i = 0; i < wrapperLogoDesctop.length; i++) {
//     wrapperLogoDesctop[i].classList.add("desctop__table");
//   }
//   button.textContent = 'Показать все';
  
//   button.classList.remove("button-close");
// });

// button.addEventListener("click", function () {
//   if (button.textContent === 'Показать все'){
//   for (let i = 0; i < wrapperLogo.length; i++) {
//     wrapperLogo[i].classList.remove("desctop__table", "hidden");
//   }
//   button.textContent = 'Скрыть';
//   button.classList.add("button-close");
// }else {
//   for (let i = 0; i < wrapperLogoHidden.length; i++) {
//     wrapperLogoHidden[i].classList.add("hidden");
//   }
//   for (let i = 0; i < wrapperLogoDesctop.length; i++) {
//     wrapperLogoDesctop[i].classList.add("desctop__table");
//   }
//   button.textContent = 'Показать все';
  
//   button.classList.remove("button-close");
// }



// });

const wrapperLogoDesctop = document.querySelectorAll(".desctop__table");
const wrapperLogoHidden = document.querySelectorAll(".hidden");
const wrapperLogo = document.querySelectorAll(".hidden, .desctop__table");

const button = document.querySelector(".button-open");

button.addEventListener("click", function () {
  const isHidden = button.classList.contains("button-close");

  if (isHidden) {
    wrapperLogoHidden.forEach(element => {
      element.classList.add("hidden");
    });
    wrapperLogoDesctop.forEach(element => {
      element.classList.add("desctop__table");
    });

    button.textContent = 'Показать все';
  } else {
    wrapperLogo.forEach(element => {
      element.classList.remove("desctop__table", "hidden");
    });

    button.textContent = 'Скрыть';
  }

  button.classList.toggle("button-close");
});
