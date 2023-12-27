
$('#scrollButton').click(function(event) {
  event.preventDefault(); 
  $('.header__row').addClass('active');  
});

Fancybox.bind("[data-fancybox]", {  

}); 


$(document).ready(function(){
  $('.grants__slider').slick({
    slidesToShow: 3, 
    slidesToScroll: 1, 
    variableWidth: true, 
    centerPadding:'0', 
    prevArrow: false,
    nextArrow: "<img src='https://svgshare.com/i/y3A.svg' class='next' alt='2'>",
  });
})

$('.questions__acc-link').on('click', function (e) {
  e.preventDefault()
  if ($(this).hasClass('questions__acc-link--active')) {
    $(this).removeClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideUp()
  } else {
    $('.questions__acc-link').removeClass('questions__acc-link--active')
    $('.questions__acc-text').slideUp()
    $(this).addClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideDown()
  }
})

$(".header__nav-list a, .header__top-btn, .footer__go-top, .footer__top-list a").on("click", function (e) {
  var id = $(this).attr('href'),
      top = $(id).offset().top - 30;
  $('body,html').animate({ scrollTop: top }, 1500);
});

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
      $('.burger').addClass('burger--follow')
  } else {
      $('.burger').removeClass('burger--follow')
  }
})

$('.burger, .overlay, .header__nav a').on('click', function (e) {
  e.preventDefault();
  $('.header__nav').toggleClass('header__nav--open');
  $('.overlay').toggleClass('overlay--show');
});




$(document).ready(function () {
  var burgerButton = $('.burger--btn');
  burgerButton.appendTo('.header__nav');
});



$('.footer__top-title--slide').on('click', function () {
  $(this).next().slideToggle();
})

function burgerMenu(icon) {
  icon.classList.toggle("change")
}


var mixerDiscover = mixitup('.discover__list');

$('.discover__filter-btn').on('click', function () {
    $('.discover__filter-btn').removeClass('discover__filter-btn--active');
    $(this).addClass('discover__filter-btn--active');
})





