$(document).ready(function(){
  $(".menu-button").on('click', function(){
    $('.menu-button').toggleClass('menu-button-active'),
    $('.nav__menu').toggleClass('nav__menu-active')
  });

});