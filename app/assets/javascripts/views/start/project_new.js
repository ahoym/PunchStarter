/* globals, PunchStarter, Backbone */
"use strict"

window.PunchStarter.Views.NewProject = Backbone.View.extend ({
	template: JST["projects/form"],
	
	events: { "submit form": "submit",
	 					"keyup input.new-project-title": "handleTitle",
						"keyup .new-project-short-blurb": "handleBlurb",
						"keyup input.new-project-location": "handleLocation",
					},
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	handleTitle: function () {
		this.renderPreview('.new-project-title');
	},
	
	handleBlurb: function () {
		this.renderPreview('.new-project-short-blurb');
	},
	
	handleLocation: function () {
		this.renderPreview('.new-project-location');
	},
	
	renderPreview: function (inputClass) {
		var content = this.$(inputClass).val();
		var previewContent = (_.escape(content));
		this.$('div' + inputClass).html(previewContent);
	},
	
	submit: function (event) {
		event.preventDefault();
		var $name = $('form').serializeJSON()["category"].name;
		var category = PunchStarter.categories.getOrFetch($name);
		var $project = $('form').serializeJSON()["project"];
		
		category.projects().create({
			title: $project.title, 
			short_blurb: $project.shortBlurb,
			project_location: $project.location,
			funding_duration: $project.fundingDuration,
			funding_goal: $project.fundingGoal,
			category_name: $name
		}, {
			success: function(project) {
				Backbone.history.navigate("#/projects/" + project.get('category_name') + "/" + project.id + "/new",
					{ trigger: true }
				);
			}
		});	
	}
	
});