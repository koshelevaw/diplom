$(document).ready(function(){
  var mixerFunded = mixitup('.funded__list');

$('.funded__filter-btn').on('click', function () {
    $('.funded__filter-btn').removeClass('funded__filter-btn--active');
    $(this).addClass('funded__filter-btn--active');
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

});

$(document).ready(function() {
  $('.switch-btn').on('click', function() {
    if ($(this).find('input').is(':checked')) {
      $('.funded__list-item').show();
    } else {
      $('.funded__list-item').hide();
    }
  });
});

const list = document.getElementById('MixItUpB0C246');
const body = document.querySelector('.funded__body');

list.addEventListener('mixEnd', (event) => {
  const filter = event.detail.state.activeFilter.selector;

  if (filter !== '.mix') {
    const count = list.querySelectorAll('.funded__list-item').length;
    const height = count * 80; 
    body.style.height = `${height}px`;
  } else {
    body.style.height = 'auto';
  }
});