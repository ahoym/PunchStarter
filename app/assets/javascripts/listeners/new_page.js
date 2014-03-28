/* globals window, PunchStarter:true */
"use strict"

$(document).ready( function () {

	$("#log-in-form input").on("click", function () {
		if (!$('#log-in-form').parent().hasClass("brighten-background")) {
			$('#log-in-form').parent().toggleClass("brighten-background");			
		}
		
		if ($('#sign-up-form').parent().hasClass("brighten-background")) {
			$('#sign-up-form').parent().toggleClass("brighten-background");
		}
	});
	
	$("#sign-up-form input").on("click", function () {
		if (!$('#sign-up-form').parent().hasClass("brighten-background")) {
			$('#sign-up-form').parent().toggleClass("brighten-background");			
		}
		
		if ($('#log-in-form').parent().hasClass("brighten-background")) {
			$('#log-in-form').parent().toggleClass("brighten-background");
		}
	});
	
	$('.demo-button').on('click', function () {
			$("#log-in-email").val("demo@user.com");
			$("#log-in-pw").val("demo");
			$(".log-in-btn").submit();
	});
});