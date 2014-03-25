window.PunchStarter.Views.ProjectsShow = Backbone.View.extend ({
	className: "project-info",
	template: JST["projects/show"],
		
	render: function () {
		debugger
		var renderedContent = this.template({ 
			project: this.model,
			projectBody: this.model.projectBody()
		});
		this.$el.html(renderedContent);
		
		return this;
	}
	
});