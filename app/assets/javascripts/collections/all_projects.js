window.PunchStarter.Collections.AllProjects = Backbone.Collection.extend ({
	url: "/api/projects",
	model: PunchStarter.Models.Project,
})