$(document).ready(function(){
	
	var search 	= $('#site-search'),
		menu 	= $('#main-menu');
	

	$('.search-toggler').on('click', function(e){
		e.preventDefault();
		search.toggleClass('visible');
		$('#searchfield').focus();	
	});

	$('.menu-toggler').on('click', function(e){
		e.preventDefault();
		menu.toggleClass('visible');
	});


	// handlebars partials
	// Handlebars.registerPartial("initiate", $("#initiate").html());
	// var source = $('#initiate').html();
	// var template = Handlebars.compile(source);


});