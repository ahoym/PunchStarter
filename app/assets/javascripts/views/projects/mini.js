window.PunchStarter.Views.MiniView = Backbone.View.extend ({
	className: "mini-project-view col-xs-3",
	template: JST["projects/mini"],
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		
		return this;
	}
});