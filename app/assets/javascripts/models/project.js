/* globals PunchStarter:true, Backbone */

window.PunchStarter.Models.Project = Backbone.Model.extend ({
	urlRoot: "/api/projects",
	
  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);

    delete json.id;
    delete json.created_at;
    delete json.updated_at;

    return json;
  },
	
	parse: function (jsonResp) {
    if (jsonResp.project_body) {
      this.projectBody().set(jsonResp.project_body, { parse: true });
      delete jsonResp.project_body;
    }

    return jsonResp;
	},
	
	projectBody: function () {
		if (!this._projectBody) {
			this._projectBody = new PunchStarter.Models.ProjectBody({}, {
				project: this
			});
		}
		
		return this._projectBody;
	},
	
	creator: function () {
		if (!this._creator) {
			this._creator = gon.currentUser;
		}
		
		return this._creator;
	},
	
	fundingPeriod: function () {
		var startDate = new Date(this.escape('created_at'));
		var endDate = new Date();
		endDate.setDate(startDate.getDate() + parseInt(this.escape('funding_duration')));
		
		return this.convertTime(startDate) + " - " + this.convertTime(endDate);
	},
	
	convertTime: function (date) {
		var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
		    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
		var month = monthNames[date.getUTCMonth()];
		var day = date.getUTCDate();
		var year = date.getUTCFullYear();
		
		return month + " " + day + ", " + year;
	}
});