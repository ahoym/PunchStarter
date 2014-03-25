/* globals window, PunchStarter:true */
"use strict"


window.PunchStarter.Routers.AppRouter = Backbone.Router.extend ({
	routes: {
		"": "homePage",
		"start": "startPage",
		"discover": "discoverPage",
		"projects/new": "newProject",
		"projects/:category/:id/new": "newProjectBody",
		"projects/:category/:id": "showProject"
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
	
	newProjectBody: function (category, id) {
		var projectCategory = PunchStarter.categories.getOrFetch(category);
		var project = projectCategory.projects().get(id);
		
		var projectBodyView = new PunchStarter.Views.NewProjectBody({
			model: project
		});
		this._swapView(projectBodyView);
	},
	
	showProject: function (category, id) {
		var projectCategory = PunchStarter.categories.getOrFetch(category);
		var project = projectCategory.projects().get(id);
		
		var projectsShowView = new PunchStarter.Views.ProjectsShow({
			model: project
		});
		this._swapView(projectsShowView);
	},
	
	_swapView: function (view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		
		this.$rootEl.html(view.render().$el);
	}
});