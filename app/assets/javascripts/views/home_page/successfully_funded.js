window.PunchStarter.Views.SuccessfullyFunded = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/successfully_funded"],
	className: "page-view successfully-funded",
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		var view = this;
		window.successfullyFunded().forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	}
});