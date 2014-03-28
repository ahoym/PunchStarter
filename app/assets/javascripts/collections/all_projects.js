window.PunchStarter.Collections.AllProjects = Backbone.Collection.extend ({
	url: "/api/projects",
	model: PunchStarter.Models.Project,
	
	staffPicks: function () {
		if (!this._picks) {
			var that = this;
			this._picks = [];
			
			(this.models).forEach( function (project) {
				if (parseInt(project.escape('creator_id')) === 1) {
					that._picks.push(project);
				}
			})	
		}
		
		return this._picks;
	}
})