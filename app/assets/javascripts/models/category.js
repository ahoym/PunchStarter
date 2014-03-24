window.PunchStarter.Models.Category = Backbone.Model.extend ({
	urlRoot: "/api/categories",
	
	projects: function () {
		if (!this._projects) {
			this._projects = new PunchStarter.Collections.Projects([], { category: this });
		}
		
		return this._projects;
	},
	
	parse: function (jsonResp) {
    if (jsonResp.projects) {
      this.projects().set(jsonResp.projects);
      delete jsonResp.projects;
    }

    return jsonResp;
	}
	
})