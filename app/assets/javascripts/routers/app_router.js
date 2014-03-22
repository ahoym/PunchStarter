/* globals window, PunchStarter:true */
"use strict"


window.PunchStarter.Routers.AppRouter = Backbone.Router.extend ({
	routes: {
		"": "homePage",
		"projects/new": "newProject",
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	homePage: function () {
		var homePageView = new PunchStarter.Views.HomePage();
		this._swapView(homePageView);
	},
	
	newProject: function () {
		var project = new PunchStarter.Models.Project();
		var newProjectView = new PunchStarter.Views.NewProject({
			model: project
		});
		this._swapView(newProjectView);
	},
	
	_swapView: function (view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		
		this.$rootEl.html(view.render().$el);
	}
	
});