/* globals PunchStarter:true, Backbone */
"use strict"

window.PunchStarter.Models.Project = Backbone.Model.extend ({
	urlRoot: "/api/projects",
	
	getOrFetch: function(id) {
		var model;
		var boards = this;
		
		if (model = this.get(id)) {
			model.fetch();
			return model;
		} else {
			model = new Trellino.Models.Board({ id: id });
			model.fetch({
				succes: function() { boards.add(model) }
			});
			return model;
		}
	},
	
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
		
    if (jsonResp.backings) {
      this.backings().set(jsonResp.backings, { parse: true });
      delete jsonResp.backings;
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
	
	backings: function () {
		if (!this._backings) {
			this._backings = new PunchStarter.Collections.Backings([], {
				project: this
			});
		}
		
		return this._backings;
	},
	
	creator: function () {
		if (!this._creator) {
			this._creator = gon.currentUser;
		}
		
		return this._creator;
	},

	startDate: function () {
		return new Date(this.escape('created_at'));
	},
	
	endDate: function () {
		var startDate = this.startDate();
		var endDate = new Date();
		endDate.setDate(startDate.getDate() + parseInt(this.escape('funding_duration')));
		return endDate;
	},
	
	fundingPeriod: function () {
		var startDate = this.startDate();
		var endDate = this.endDate();
		
		return this.convertTime(startDate) + " - " + this.convertTime(endDate);
	},
	
	daysLeft: function () {
		var today = new Date();
		return Math.floor((this.endDate().getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
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