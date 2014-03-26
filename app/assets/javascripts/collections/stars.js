window.PunchStarter.Collections.Stars = Backbone.Collection.extend ({
  url: function () {
  	return this.project.url() + "/stars";
  },
	
	initialize: function (models, options) {
		this.project = options.project;
	},
	
	toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);

    delete json.id;
    delete json.created_at;
    delete json.updated_at;

    return json;
  }
})