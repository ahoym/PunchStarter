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
		var $name = $('form').serializeJSON()["category"].name;
		var category = PunchStarter.categories.getOrFetch($name);
		event.preventDefault();

		var $project = $('form').serializeJSON()["project"];
		var that = category
		
		category.projects().create({
			title: $project.title, 
			short_blurb: $project.shortBlurb,
			project_location: $project.location,
			funding_duration: $project.fundingDuration,
			funding_goal: $project.fundingGoal,
			category_name: $name
		}, {
			success: function(project) {
				Backbone.history.navigate("/#", { trigger: true })
			},
			error: function(error) {
				that
				debugger
				console.log(arguments);
			}
		});	
	}
	
});