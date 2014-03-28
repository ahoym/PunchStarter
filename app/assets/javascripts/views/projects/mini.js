window.PunchStarter.Views.MiniView = Backbone.View.extend ({
	className: "mini-project-view",
	template: JST["projects/mini"],
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.html(renderedContent);
		
		return this;
	}
})