window.PunchStarter.Views.LocationProjects = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/location_projects"],
	className: "location-projects",
	
	initialize: function (options) {
		this.location = options.location;
	},
	
	render: function () {
		var renderedContent = this.template({ location: this.location })
		this.$el.html(renderedContent);
		
		return this;
	},
	
	projectsAtLocation: function () {
		if (!this._projects || this._projects[0] != this.location) {
			this._projects = [this.location];
		} else {
			return this._projects;
		}
		
		var view = this;
		_(PunchStarter.categories.models).each( function (category) {
			_(category.projects().models).each( function (project) {
				if (project.escape('project_location') === view.location) {
					view._projects.push(project);
				}
			})
		})
		
		return this._projects;
	}
});