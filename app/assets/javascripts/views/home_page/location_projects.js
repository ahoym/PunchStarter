window.PunchStarter.Views.LocationProjects = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/location_projects"],
	className: "page-view location-projects",
	
	initialize: function (options) {
		this.location = options.location;
		this.projects = this.projectsAtLocation();
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
	},
	
	render: function () {
		var renderedContent = this.template({ location: this.location })
		this.$el.html(renderedContent);
		
		// Take first 4 only.
		var view = this;
		this.projectsAtLocation().slice(1,5).forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	},
});