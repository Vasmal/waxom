$(document).ready(function () {

  //Open-close menu settings
  $('.menu-button').on('click', function () {
    $('.menu-button').toggleClass('menu-button-active'),
    $('.nav__menu').toggleClass('nav__menu-active')
  });

  //header slider init
  $('.header__slider').slick({
    dots: true
  });
  
  
  //promo section tabs
  $('.promo__item').on('click', function(){
    $('.promo__item').removeClass('promo__item-active');
    $(this).addClass('promo__item-active');
  });
  
  //gallery mix it up init
  $('.gallery__tabs button').on('click', function(){
    $('.gallery__tabs button').removeClass('gallery__tab-active');
    $(this).addClass('gallery__tab-active');
  });

  var mixer = mixitup('.gallery__list');

  //video-play settings 
  $('.play-button').on('click', function () {
    $('.video-wrap').addClass('played'),
    $('.video-container video').get(0).play()
  });

  $('video').on('click', function (){
    $('.video-container video').get(0).pause(),
    $('.video-wrap').removeClass('played'),
    console.log('ok');
  });

  //posts slider settings 

  $('.posts__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.posts__item-slider').slick({
    arrows: false,
    dots: true
  })

});