window.PunchStarter.Views.SuccessfullyDefunded = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/successfully_defunded"],
	className: "page-view successfully-defunded",
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		var view = this;
		window.successfullyDefunded().forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	}
});