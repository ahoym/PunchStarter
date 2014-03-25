window.PunchStarter.Views.NewProjectBody = Backbone.View.extend ({
	template: JST["project_bodies/new"],
	
	events: { "submit form": "submit" },
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	submit: function (event) {
		event.preventDefault();
		var $params = $('form').serializeJSON()["project_body"];
		var project = this.model;
		
		// Not sure if can build through project, because of the has_one
		//	association at the Rails level.
		var projectBody = new PunchStarter.Models.ProjectBody({
			project_id: this.model.id,
			description: $params.description,
			challenges: $params.challenges,
			faq: $params.faq
		}, {
			project: project
		});
		
		projectBody.save({}, {
			success: function (projectBody) {
				project.projectBody().set(projectBody.attributes);
				var category = project.attributes.category_name;
				Backbone.history.navigate("#/projects/" + project.id + "/" + category,
					{ trigger: true }
				);
			}
		});
	}
});