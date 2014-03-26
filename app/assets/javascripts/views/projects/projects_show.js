window.PunchStarter.Views.ProjectsShow = Backbone.View.extend ({
	className: "project-info container",
	template: JST["projects/show"],
	
	events: { "click .support-btn": "redirectToNewBacking" },
		
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
	}
});