let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".proslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },        
      1080: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1448: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".tesslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
      970: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });