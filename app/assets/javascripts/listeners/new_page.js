$(document).ready( function () {
	
	$("#log-in-form input").on("click", function (event) {
		$('#log-in-form').parent().toggleClass("brighten-background");
		
		if ($('#sign-up-form').parent().hasClass("brighten-background")) {
			$('#sign-up-form').parent().toggleClass("brighten-background");
		}
	})
	
	$("#sign-up-form input").on("click", function (event) {
		$('#sign-up-form').parent().toggleClass("brighten-background");
		
		if ($('#log-in-form').parent().hasClass("brighten-background")) {
			$('#log-in-form').parent().toggleClass("brighten-background");
		}
	})
	
	$('submit').on('click', function(event) {
		
	})
	
});