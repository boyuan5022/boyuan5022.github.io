$(document).ready(function() {
	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll >10){
			$('#navtitle').css({background: 'white',
							    'border-color': '#CCCCCC'});
			$('#navtitle a').css({color: 'black',
								'border-color': 'black'});}
		else{
			$('#navtitle').css({background: 'transparent',
								'border-color': 'transparent'});
			$('#navtitle a').css({color: 'white',
								'border-color': 'white'});}
		});
});

$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade").each(function() {
	  $(this).css("opacity", ($(this).outerHeight()-$( window ).scrollTop( ))/$(this).outerHeight())
    });
  }).scroll(); //invoke scroll-handler on page-load
});