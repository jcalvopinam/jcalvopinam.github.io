$(document).ready(function () {
  var animationTime = 400;
  var $blogButton = $('a.blog-button');
  var $panelCover = $('.panel-cover');

  $('body').removeClass('no-js');

  $blogButton.click(function () {
    if ($panelCover.hasClass('panel-cover--collapsed')) return;
    currentWidth = $panelCover.width();
    if (currentWidth < 960) {
      $panelCover.addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $panelCover.css('max-width', currentWidth);
      $panelCover.animate({ 'max-width': '530px', 'width': '40%' }, animationTime, swing = 'swing', function () { });
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $blogButton.find('span').text('❮❮');
    $panelCover.addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $panelCover.addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $blogButton.on('click', function (e) {
    if (window.location.hash === '#blog') {
      // open > close
      e.preventDefault();
      window.location.hash = ''; // remove hash
      $blogButton.find('span').text('❯❯');
      $panelCover.removeClass('panel-cover--collapsed');
      $panelCover.removeAttr('style'); // clean style inline width
      $panelCover.animate({ 'max-width': '100%' }, animationTime, swing = 'swing', function () { });
    } else {
      // close > open
      $blogButton.find('span').text('❮❮');
      $panelCover.addClass('panel-cover--collapsed');
    }
  });

});