/* globals PunchStarter:true, Backbone */
"use strict"

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
		
    if (jsonResp.backings) {
      this.backings().set(jsonResp.backings, { parse: true });
      delete jsonResp.backings;
    }
		
		if (jsonResp.stars) {
			this.stars().set(jsonResp.stars, { parse: true });
			delete jsonResp.stars;
		}
		
		if (jsonResp.category) {
			this._category = jsonResp.category;
			delete jsonResp.category;
		}
		
		if (jsonResp.creator) {
			this.creator().set(jsonResp.creator, { parse: true });
			delete jsonResp.stars;
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
	
	amountFunded: function () {
		var total = 0;
		
		_(this.backings().models).each ( function(backing) {
			total += parseInt(backing.escape('investment'));
		})
		
		return total;
	},
	
	numBackers: function () {
		return this.backings().models.length;
	},
	
	stars: function () {
		if (!this._stars) {
			this._stars = new PunchStarter.Collections.Stars([], {
				project: this
			});
		}
		
		return this._stars;
	},
	
	creator: function () {
		if (!this._creator) {
			this._creator = new PunchStarter.Models.User({ id: gon.currentUserId });
		}
		
		return this._creator;
	},
	
	category: function() {
		if (!this._category) {
			this._category = "";
		}
		
		return this._category;
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
	},
	
	percentFunded: function () {
		return Math.round(parseFloat(this.amountFunded()) / parseFloat(this.escape('funding_goal')) * 100);
	}
});