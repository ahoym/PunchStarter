window.PunchStarter.Views.SuccessfullyFunded = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/successfully_funded"],
	className: "page-view successfully-funded",
	
	initialize: function () {
		var _thisView = this;
		var funded = new PunchStarter.Collections.Projects([], { extension: "successfully_funded" });
		funded.fetch({
			success: function(projects) {
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