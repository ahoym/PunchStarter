/* globals window, PunchStarter:true */
"use strict"

window.PunchStarter = {
	Models: {},
	Collections: {},
	Views: {},	
	Routers: {},

	initialize: function () {
		PunchStarter.projects = new PunchStarter.Collections.Projects();
		PunchStarter.projects.fetch({
			success: function() {
				new PunchStarter.Routers.AppRouter({
					$rootEl: $('#content')
				});
				Backbone.history.start();
			},
			error: function () { debugger }
		});
	}
};

$(document).ready(function() {
	PunchStarter.initialize();
});