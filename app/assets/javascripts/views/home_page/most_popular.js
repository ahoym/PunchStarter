window.PunchStarter.Views.MostPopular = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/most_popular"],
	className: "page-view most-popular",
	
	initialize: function () {
		var _thisView = this;
		var popular = new PunchStarter.Collections.Projects([], { extension: "most_popular" });
		popular.fetch({
			success: function (projects) {
				_thisView.render(projects);
			}
		})
	},
	
	render: function (projects) {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		var view = this;
		projects.forEach (function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	}
});