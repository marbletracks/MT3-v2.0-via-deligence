var MARBLE = MARBLE || {};

(function($) {

  // USE STRICT
  "use strict";

  MARBLE.initialize = {
    init: function() {
      MARBLE.initialize.general();
      MARBLE.initialize.svgconvert();
      MARBLE.initialize.slickslider();
      MARBLE.initialize.sectionBackground();
      MARBLE.initialize.alloffcanvas();
    },

    /*========================================================*/
    /*=           all small codes           =*/
    /*========================================================*/
    general: function() {
      //Video Play With Poster
      $('.youtube-wrapper').on('click', function(event) {
        event.preventDefault();
        var fr = $(this).find('iframe');
        var fadr = $(this).find('iframe').attr('src');
        var fuadr = fadr + '?autoplay=1';

        $(this).toggleClass('reveal');
        fr.attr('src', fuadr);
        console.log(fadr);
      });
      //back to top
      var backtotop = $(".backtotop");
      var windo = $(window),
        HtmlBody = $('html, body');
      backtotop.on('click', function() {
        HtmlBody.animate({
          scrollTop: 0
        }, 1500);
      });
      // average color
      $('.js-fillcolor').fillColor();
      // Schedule tab details flip
      $(".schedule-btn").on("click", function() {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active');
      });
      //AOS animation init
      AOS.init({
        once: true
      });
      // venobox
      $('.venobox').venobox();
      // Mobile  menu
      $('#dl-menu').dlmenu();
    },
    /*========================================================*/
    /*=           All popup          =*/
    /*========================================================*/
    alloffcanvas: function() {

      // Offcanvus menu trigger
      $('.hamburger').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('.off-canvus-menu').addClass('open');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .close-offcanvus').on('click', function() {
          $('.off-canvus-menu').removeClass('open');
          $('.mask-overlay').remove();
        });
      });

    },

    /*========================================================*/
    /*=           SvgConvert          =*/
    /*========================================================*/
    svgconvert: function() {
      $('img.svg').each(function() {
        var $img = $(this),
          imgID = $img.attr('id'),
          imgClass = $img.attr('class'),
          imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass);
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);
        }, 'xml');
      });
    },

    /*========================================================*/
    /*=           Slickslider         =*/
    /*========================================================*/
    slickslider: function() {


      $(".post-gallery-slickSlider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        fade: true,
        draggable: true,
        prevArrow: '<button class="PrevArrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="NextArrow"><i class="fas fa-arrow-right"></i></button>',
      });

      $(".previlege-slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: true,
        prevArrow: '<button class="PrevArrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="NextArrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [{
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]

      });

      $(".event-goal-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplaySpeed: 10000,
        speed: 900,
        autoplay: true,
        draggable: true,
        cssEase: 'linear',
        dots: true
      });

      $(".discussion-member-slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        autoplaySpeed: 5000,
        speed: 900,
        autoplay: false,
        draggable: true,
        cssEase: 'linear',
        dots: false,
        focusOnSelect: true
      });

      $(".about-boxed-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        speed: 900,
        autoplay: false,
        draggable: true,
        cssEase: 'linear',
        dots: true,
        focusOnSelect: true,
        arrows: false
      });


      $(".staff-carousel").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: true,
        prevArrow: '<button class="PrevArrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="NextArrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      });

      $(".testimonial-slider-one").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: true,
        arrows: false,

        responsive: [{
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]

      });

    },

    /*==========================================*/
    /*=           Section Background           =*/
    /*==========================================*/
    sectionBackground: function() {
      // Section Background Image
      $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });

      //Parallax Background
      if ($(window).width() > 768) {
        $(window).on('scroll', function() {
          $('[data-parallax="image"]').each(function() {
            var actualHeight = $(this).position().top;
            var speed = $(this).data('parallax-speed');
            var reSize = actualHeight - $(window).scrollTop();
            var makeParallax = -(reSize / 2);
            var posValue = makeParallax + "px";

            $(this).css({
              backgroundPosition: '50% ' + posValue,
            });
          });
        });
      }
    },
  };

  MARBLE.documentOnReady = {
    init: function() {
      MARBLE.initialize.init();
    },
  };

  MARBLE.documentOnLoad = {
    init: function() {
      MARBLE.initialize.masonry();
      $('.preloader').delay(80).fadeOut(80);
      $('.slider-wrapper').delay(5000).addClass('active');
    },
  };

  MARBLE.documentOnResize = {
    init: function() {
      MARBLE.initialize.masonry();
      if ($('body').width() > 575)
        $('.slider').height(780);
      else
        $('.slider').height(490);
    },
  };

  MARBLE.documentOnScroll = {
    init: function() {
      MARBLE.initialize.sectionBackground();

      /*=================================*/
      /*=           Scroll Header          =*/
      /*=================================*/

      if ($(this).scrollTop() > 150) {
        $('.header_default').addClass("fixed")
        $('.search-fullwidth').removeClass("open")
      } else {
        $('.header_default').removeClass("fixed")
      }

      if ($(this).scrollTop() > 600) {
        $('.backtotop').addClass("show")
      } else {
        $('.backtotop').removeClass("show")
      }

      /* Back to top */

      /*=================================*/
      /*=    Footer animation trigger          =*/
      /*=================================*/

      if ($(window).scrollTop() + $(window).height() > ($(document).height() - 300)) {
        //you are at bottom
        $(".hexagon-box-footer").addClass("open");
      }
    },
  };

  // Initialize Functions
  $(document).ready(MARBLE.documentOnReady.init);
  $(window).on('load', MARBLE.documentOnLoad.init);
  $(window).on('resize', MARBLE.documentOnResize.init);
  $(window).on('scroll', MARBLE.documentOnScroll.init);

})(jQuery);