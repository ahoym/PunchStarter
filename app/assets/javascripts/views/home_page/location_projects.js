window.PunchStarter.Views.LocationProjects = Backbone.View.extend ({
	template: JST["home_page/location_projects"],
	className: "location-projects",
	
	initialize: function (options) {
		this.location = options.location;
	},
	
	render: function () {
		var renderedContent = this.template({location: this.location})
		this.$el.html(renderedContent);
		
		return this;
	}
});