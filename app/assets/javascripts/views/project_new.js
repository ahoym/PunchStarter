/* globals, PunchStarter, Backbone */
"use strict"

window.PunchStarter.Views.NewProject = Backbone.View.extend ({
	template: JST["projects/form"],
	
	events: { "submit form": "submit" },
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	submit: function (event) {
		event.preventDefault();
		var $project = $('form').serializeJSON()["project"]
		var $category = $('form').serializeJSON()["category"]
		
		PunchStarter.projects.create({ 
			title: $project.title, 
			short_blurb: $project.shortBlurb,
			project_location: $project.projectLocation,
			funding_duration: $project.fundingDuration,
			funding_goal: $project.fundingGoal,
		}, {
			success: function (project) {
				debugger
				project.category.create({ name: $category.name })
			}
		});
	}
	
});