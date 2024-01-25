  
$(document).ready(function(){
    $('.project-card-container').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    $('.experience-wrapper').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  });
   