
/*
------------------------------------------
   ------------------------------------------
Template Name: " "
Template URI: http://sobuj4u.com
Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
Author: Al Amin Sobuj
Author URI: http://sobuj4u.com
Version: 1.0
File Name : Active Js File
   ------------------------------------------
------------------------------------------
*/

(function ($) {
  "use strict";
  jQuery(document).ready(function($){

    $('#client-logo-slider').owlCarousel({
      center:true,
      loop:true,
      nav:false,
      autoplay: true,
      smartSpeed: 500,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        },
        1200:{
          items:5
        }
      }
    })


    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    var checkbox = document.querySelector('#customSwitch1');
    var pricing1 = document.querySelector('#pricing-1');
    var pricing2 = document.querySelector('#pricing-2');
    checkbox.addEventListener('change', function(evt) {
      pricing1.classList.toggle('pricing-section--active');
      pricing2.classList.toggle('pricing-section--active');
    })
    
  });

  jQuery(window).load(function(){
    
  });
  
}(jQuery));