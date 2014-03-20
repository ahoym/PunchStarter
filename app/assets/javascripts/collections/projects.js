/* globals window, PunchStarter:true, Backbone */

window.PunchStarter.Collections.Projects = Backbone.Collection.extend ({
	model: PunchStarter.Models.Project,
	url: "/api/projects"
	
});