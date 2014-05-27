// Note, this is only loaded on the signup/login page (See the html page)! Not included in application.js.

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
	
	$('.demo-btn').on('click', function () {
		console.log('hey')
			$("#log-in-email").val("demo@user.com");
			$("#log-in-pw").val("demo");
			$(".log-in-btn").click();
	});
});