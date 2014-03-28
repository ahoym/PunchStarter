window.PunchStarter.Views.MostRecent = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/most_recent"],
	className: "page-view most-recent",
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		var view = this;
		window.mostRecent().forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	}
});