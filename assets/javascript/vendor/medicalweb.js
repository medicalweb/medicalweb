$(document).ready(function() {
	$('.typed-content').typed({
    strings: [
    	"Hi.", 
    	"We are a group of Medical Students", 
    	"At Griffith University, Gold Coast",
    	"We would like to do <strong>your</strong> typing"
    ],
    typeSpeed: 0
  });

  viewport = $(window).height();
  middle_cta_height = viewport/2

  $('.middle-cta').css('height', middle_cta_height)

});