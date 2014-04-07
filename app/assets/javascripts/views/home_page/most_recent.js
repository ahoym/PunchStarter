window.PunchStarter.Views.MostRecent = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/most_recent"],
	className: "page-view most-recent",
	
	initialize: function () {
		var _thisView = this;
		var recents = new PunchStarter.Collections.Projects([], { extension: "most_recent" });
		recents.fetch({
			success: function (projects) {
				_thisView.render(projects);
			}
		});		
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