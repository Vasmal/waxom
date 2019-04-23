$(document).ready(function () {

  //Open-close menu settings
  $('.menu-button').on('click', function () {
    $('.menu-button').toggleClass('menu-button-active'),
    $('.nav__menu').toggleClass('nav__menu-active')
  });

  //header slider initialization
  $('.header__slider').slick({
    dots: true
  });
  
  
  //promo section tabs
  $('.promo__item').on('click', function(){
    $('.promo__item').removeClass('promo__item-active');
    $(this).addClass('promo__item-active');
  });
  
  //gallery mix it up initialization
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

});