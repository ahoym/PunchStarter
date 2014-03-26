/* globals window, PunchStarter:true */
"use strict"

window.PunchStarter.Routers.AppRouter = Backbone.Router.extend ({
	routes: {
		"": "homePage",
		"start": "startPage",
		"discover": "discoverPage",
		"projects/new": "newProject",
		"backing/projects/:id/:category/new": "newBacking",
		"projects/:id/:category/new": "newProjectBody",
		"projects/:id/:category": "showProject"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	homePage: function () {
		var homePageView = new PunchStarter.Views.HomePage();
		this._swapView(homePageView);
	},
	
	discoverPage: function () {
		var discoverView = new PunchStarter.Views.Discover({ 
			collection: PunchStarter.categories
		});
		this._swapView(discoverView);
	},
	
	newProject: function () {
		var project = new PunchStarter.Models.Project();
		var newProjectView = new PunchStarter.Views.NewProject({
			model: project
		});
		this._swapView(newProjectView);
	},
	
	newProjectBody: function (id, category) {
		var projectCategory = PunchStarter.categories.getOrFetch(category);
		var project = projectCategory.projects().get(id);
		
		var projectBodyView = new PunchStarter.Views.NewProjectBody({
			model: project
		});
		this._swapView(projectBodyView);
	},
	
	showProject: function (id, category) {
		var projectCategory = PunchStarter.categories.getOrFetch(category);
		var project = projectCategory.projects().get(id);
		var projectsShowView = new PunchStarter.Views.ProjectsShow({
			model: project
		});
		this._swapView(projectsShowView);
	},
	
	newBacking: function (id, category) {
		var projectCategory = PunchStarter.categories.getOrFetch(category);
		var project = projectCategory.projects().get(id);
				
		var newBackingView = new PunchStarter.Views.NewBacking({
			model: project
		});
		this._swapView(newBackingView);
	},
	
	_swapView: function (view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		
		this.$rootEl.html(view.render().$el);
	}
});