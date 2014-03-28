window.PunchStarter.Views.MostPopular = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/most_popular"],
	className: "page-view most-popular",
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		var view = this;
		window.mostPopular().slice(1,5).forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	}
});