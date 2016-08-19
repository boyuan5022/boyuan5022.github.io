$(document).ready(function() {
	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		var ht = $('#titleimage').outerHeight()-80;
		if (scroll >ht){
			$('#navtitle').css({background: 'white',
							    'border-color': '#CCCCCC'});
			$('#navtitle a').css({color: 'blue'});}
		else{
			$('#navtitle').css({background: 'transparent',
							    'border-color': 'transparent'});
			$('#navtitle a').css({color: 'white'});}
		});
});