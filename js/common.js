$(document).ready(function () {
  $('.menu-button').on('click', function () {
    $('.menu-button').toggleClass('menu-button-active'),
    $('.nav__menu').toggleClass('nav__menu-active')
  });

  $('.promo__item').on('click', function(){
    $('.promo__item').removeClass('promo__item-active');
    $(this).addClass('promo__item-active');
  });
  
    

  $('.header__slider').slick({
    dots: true
  });
});