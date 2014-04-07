/* globals, PunchStarter, Backbone */
"use strict"

window.PunchStarter.Views.NewProject = Backbone.View.extend ({
	template: JST["projects/form"],
	
	events: { "submit form": "submit",
	 					"keyup input.new-project-title": "handleTitle",
						"keyup .new-project-short-blurb": "handleBlurb",
						"keyup input.new-project-location": "handleLocation",
						"change input.project-image": "handleImage"
					},
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
    var $filePickerInput = this.$("input[type=filepicker]");
    filepicker.constructWidget($filePickerInput[0]);
		
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
	
	handleImage: function (event) {
		if (!this._picture) {
			this._picture = event.originalEvent.fpfile.url;
			this.$("div.new-project-image").html("<img src='"+this._picture+"' width='275' height='250'>");
		}
		
		return this._picture
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
			filepicker_url: this._picture,
			category_name: $name
		}, {
			success: function(project) {
				// category.projects().create doesn't seem to add the project
				//	to its collection.
				project.creator();
				var category = PunchStarter.categories.getOrFetch($name);
				category.projects().add(project);
				PunchStarter.allProjects.add(project);
				
				Backbone.history.navigate("#/projects/" + project.id + "/" + project.escape('category_name') + "/new",
					{ trigger: true }
				);
			}
		});	
	}
	
});