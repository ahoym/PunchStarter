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
		
		var project = new PunchStarter.Models.Project();
		
		project.save({
			title: $project.title, 
			short_blurb: $project.shortBlurb,
			project_location: $project.location,
			funding_duration: $project.fundingDuration,
			funding_goal: $project.fundingGoal,
			filepicker_url: this._picture,
			category_name: $name
		}, {
			success: function(project) {
				//sets project creator
				project.creator();
				
				var category = PunchStarter.categories.getOrFetch($name);
				category.projects().add(project);
				
				Backbone.history.navigate("#/projects/" + project.id + "/" + project.escape('category_name') + "/new",
					{ trigger: true }
				);
			},
			error: function(model, xhr) {
				$('.alert').toggleClass('alert-danger');
				
				var errors = "";
				for (var i = 0; i < xhr.responseJSON.length; i++) {
					errors += ("<li>" + xhr.responseJSON[i] + "</li>");
				}
				
				// need to add these because the JSON response is for projects only, not image/category.
				if ($('form').serializeJSON()['project']['image_url'] === "") {
					errors += ("<li>A Picture wasn't uploaded!</li>");
				}
				
				if ($('form').serializeJSON()['category'].name === "") {
					errors += ("<li>Category can't be blank.</li>");
				}
				
				$('.alert').html('<h3>Whoops!</h3><ul>' + errors + '</ul>');
					
				$('body').scrollTop(0);
			}
		});	
	}
	
});