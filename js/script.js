
$(document).ready(function(){
  'use strict';

  /* Start smooth scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  /* End smooth scroll */


  $("html").niceScroll(
    {
      cursorcolor:"#E040FB",
      cursorwidth:"7px",
      cursorborder:"1px solid #6A1B9A",
      cursorborderradius:"5px",
      zindex:"999999"
    });

    /* Start Loading JS */
      $(window).on('load',function(){
        $(".loading .sk-cube-grid").fadeOut(2000,function(){
          $(this).parent().fadeOut(1000,function(){
            $("body").css("overflow","auto");
            $(this).remove();
          });
        });
      });


    /* Start Scroll Up */
      var scrollButtom = $("#scroll-up")
      $(window).scroll(function(){
        console.log($(this).scrollTop());
        $(this).scrollTop() >= 500 ? scrollButtom.show("fast") : scrollButtom.hide("fast");
      });
      scrollButtom.click(function(){
        $("html,body").animate({scrollTop: 0},700);
      });
    /* End Scroll Up */

});
