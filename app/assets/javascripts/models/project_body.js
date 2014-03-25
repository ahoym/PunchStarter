window.PunchStarter.Models.ProjectBody = Backbone.Model.extend ({
	urlRoot: function () {
		return this.project.url() + "/project_bodies"
	},
	
	initialize: function (model, options) {
		this.project = options.project;
	}
});