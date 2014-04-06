/* globals window, PunchStarter:true, Backbone */

window.PunchStarter.Collections.Projects = Backbone.Collection.extend ({
	model: PunchStarter.Models.Project,
	url: function () {
	 return "/api/projects" + this.extension;
	},
	
	initialize: function (models, options) {
		this.extension = (!options.extension ? "" : "/" + options.extension);
		this.category = options.category;
	}
});