$(document).ready(function(){
	
	$('#search-trigger').click(function(e){
		var trigger = $(this);
		e.preventDefault();
		$('#search-container').toggleClass('open');
		trigger.toggleClass('active');
		$('#search-input').focus();
	});

	// handlebars partials
	// Handlebars.registerPartial("initiate", $("#initiate").html());
	// var source = $('#initiate').html();
	// var template = Handlebars.compile(source);


});