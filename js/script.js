$(document).ready(function() {
	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		var ht = $('#titleimage').outerHeight()-62;
		if (scroll >ht){
			$('#navtitle').css({background: 'white',
							    'border-color': '#CCCCCC'});
			$('#navtitle a').css({color: 'blue',
								'border-color': 'blue'});}
		else{
			$('#navtitle').css({background: 'transparent',
							    'border-color': 'transparent'});
			$('#navtitle a').css({color: 'white',
								'border-color': 'white'});}
		});
});
