window.PunchStarter.Views.LocationProjects = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/location_projects"],
	className: "page-view",
	
	initialize: function (options) {
		this.location = options.location;
		
		// Finds projects with location === options.location
		var _thisView = this;
		var extension = "project_location/" + this.parseLocation();
		var projs = new PunchStarter.Collections.Projects([], { extension: extension });
		projs.fetch({ 
			success: function (projects) {
			_thisView.render(projects);
			}
		});
	},
	
	// Parse for url-string
	parseLocation: function() {
		return this.location.replace(/, /g, '-').replace(/ /g, '+');
	},
	
	render: function (projects) {
		var renderedContent = this.template({ location: this.location })
		this.$el.html(renderedContent);
		
		var view = this;
		projects.forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	},
});