$(document).ready(function(){
	
	$('#search-trigger').click(function(e){
		e.preventDefault();
		$('#search-container').toggleClass('open');
		$('#search-input').focus();
	});

	// handlebars partials
	// Handlebars.registerPartial("initiate", $("#initiate").html());
	// var source = $('#initiate').html();
	// var template = Handlebars.compile(source);


});