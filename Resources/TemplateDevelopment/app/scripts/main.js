

$(function(){
  'use strict';

  $('#navmenu').mmenu({
    navbar: {
      title: 'Navigation'
    },
    offCanvas: {
      position: 'right',
      zposition: 'front'
    }
  },
  {
    clone: true
  });

});




$(function(){
  'use strict';

  var

    // Basic elements
    $header = $('.header'),
    $mainMenu = $('ul.navbar-nav'),
    $offCanvasMenu = $('#offNavMenu'),

    // Speed to scroll via JS
    scrollSpeed = 400,
    // Offset to keep while scrolling
    scrollOffset = 3*$mainMenu.height(),

    $affixBar = $('.navbar'),
    affixOptions = {
      offset: {
        top: $affixBar.offset().top + $affixBar.height(),
        // bottom: function () {
        //   return (this.bottom = $('.footer').outerHeight(true))
        // }
      }
    },

    // Slick slider
    $slickslider = $('.slick-slider'),
    slickOptions = {
      arrows: true,
      dots: true,
      // autoplay: true,
    },

    // Quickskip Navigation
    $quickskips = $('nav.quickskip a')

    // Accordion
    // $accordions = $('.accordion')
  ;

  if($mainMenu.length){
    $('button.navbar-toggle').click(function(){
      $(this).toggleClass('collapsed');
    });

    $offCanvasMenu.append($mainMenu.clone().removeClass('navbar-nav'));

    $affixBar.affix(affixOptions);
  }

  if($quickskips.length){
    $quickskips.click(function(e){
      e.preventDefault();

      if($($(this).attr('href'))){
        var
          $target = $($(this).attr('href')),
          $link = $('a[data-toggle]', $target),
          $toggle = $($link.attr('href'))
        ;
        // Not open already?
        //
        if($toggle.length && !$toggle.hasClass('in')){
          $link.click();
        }
        setTimeout(function(){
          $('html, body').animate({
              scrollTop: $target.offset().top - scrollOffset
          }, scrollSpeed);
        }, scrollSpeed);
      }
    });
  }

  if($slickslider.length){
    $slickslider.each(function(){
      var
        $slider = $(this),
        opts = slickOptions
      ;

      $slider.slick(opts);

      if($slider.hasClass('facts')){
        var
          $context = $slider.parent().parent().find('.fact-context')
        ;
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('> .fact', $context).removeClass('open').eq(nextSlide).addClass('open');
        });
      }
    });

  }

  // Accordion
  $('.panel').on('show.bs.collapse hide.bs.collapse', function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });
  // Initial set "active"
  $('.panel .collapse.in').each(function(){
    $(this).closest('.panel').addClass('active');
  });

});
