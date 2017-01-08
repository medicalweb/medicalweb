$(document).ready(function() {
	$('.typed-content').typed({
    strings: ["Hi.", "We are a group of Medical Students"],
    typeSpeed: 0
  });

  viewport = $(window).height();
  middle_cta_height = viewport/2

  $('.middle-cta').css('height', middle_cta_height)

});