$(document).ready(function() {
	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll >10 && scroll<$("#imagetitle").outerHeight()*0.8-$('#articletitle').outerHeight()-50){
			$('#navtitle').css({background: 'white',
							    'border-color': '#CCCCCC'});
			$('#navtitle a').css({color: 'blue',
								'border-color': 'blue'});
			$('#articletitle').css({'position': 'fixed',
								'top': '20%'});}
		else if (scroll >$("#imagetitle").outerHeight()*0.8-$('#articletitle').outerHeight()-50){
			$('#navtitle').css({background: 'white',
							    'border-color': '#CCCCCC'});
			$('#navtitle a').css({color: 'blue',
								'border-color': 'blue'});
			$('#articletitle').css({'position': 'absolute',
									'top': $("#imagetitle").outerHeight()-$('#articletitle').outerHeight()-50});}
		else{
			$('#navtitle').css({background: 'transparent',
								'border-color': 'transparent'});
			$('#navtitle a').css({color: 'white',
								'border-color': 'white'});
			$('#articletitle').css({'position': 'fixed',
									'top': '20%'});}
		});
});