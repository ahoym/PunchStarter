window.PunchStarter.Views.ProjectsShow = Backbone.View.extend ({
	className: "project-info container",
	template: JST["projects/show"],
		
	render: function () {
		var renderedContent = this.template({ 
			project: this.model,
			projectBody: this.model.projectBody()
		});
		this.$el.html(renderedContent);
		
		return this;
	}
	
});