$('.faq__acc-link').on('click', function (e) {
  e.preventDefault()
  if ($(this).hasClass('faq__acc-link--active')) {
    $(this).removeClass('faq__acc-link--active')
    $(this).children('.faq__acc-text').slideUp()
  } else {
    $('.faq__acc-link').removeClass('faq__acc-link--active')
    $('.faq__acc-text').slideUp()
    $(this).addClass('faq__acc-link--active')
    $(this).children('.faq__acc-text').slideDown()
  }
});

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

