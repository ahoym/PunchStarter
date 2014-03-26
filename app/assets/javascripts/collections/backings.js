window.PunchStarter.Collections.Backings = Backbone.Collection.extend ({
	model: PunchStarter.Models.Backing,
	url: function () {
		return this.project.url() + "/backings"
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