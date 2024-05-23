
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
      delay:3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:20,
      autoplay:{
        delay:2500,
      },
      responsive:{
        0:{
          items:1
        },
        600:{
          items:4
        },
        1000:{
          items:5
        }
      }
    });
  });