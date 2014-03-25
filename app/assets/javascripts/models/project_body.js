window.PunchStarter.Models.ProjectBody = Backbone.Model.extend ({
	urlRoot: function () {
		return this.project.url() + "/project_bodies"
	},
	
	initialize: function (model, options) {
		this.project = options.project;
	},
	
  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);

    delete json.id;
    delete json.created_at;
    delete json.updated_at;

    return json;
  }
});