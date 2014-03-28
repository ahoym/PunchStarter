window.PunchStarter.Views.ProjectsShow = Backbone.View.extend ({
	className: "project-info container",
	template: JST["projects/show"],
	
	events: { "click .support-btn": "redirectToNewBacking",
						"click .favorites": "starred"
					},
		
	render: function () {
		var renderedContent = this.template({ 
			project: this.model,
			projectBody: this.model.projectBody()
		});
		this.$el.html(renderedContent);

		return this;
	},
	
	//Having this url in the HTML would look a lot messier
	redirectToNewBacking: function () {
		Backbone.history.navigate("#/backing/projects/" + this.model.id + "/" + this.model.collection.category.escape('name') + "/new"
			, { trigger: true });
	},
	
	starred: function (event) {
		var $button = $(event.currentTarget);
		var project = this.model;
		
		if (!$button.hasClass("starred")) {
			$button.toggleClass("starred");
			$button.html("<img src='assets/unStarMe.png' height='40' width='40'> Unlike this project...");
			
			project.stars().create({ liked_project_id: project.id });
		} else {
			$button.toggleClass("starred");
			$button.html("<img src='assets/starMe.png' height='40' width='40'> Like this project!");
			
			//Right now, stars are not linked to the users @ the Backbone level. Modify this when/if
			//	a User Backbone model is created.	
		  var star = project.stars().findWhere({ liked_project_id: project.id });
			star.destroy();
		}	
	}
});