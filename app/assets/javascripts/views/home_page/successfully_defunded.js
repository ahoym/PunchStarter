window.PunchStarter.Views.SuccessfullyDefunded = Backbone.View.extend ({
	tagName: "li",
	template: JST["home_page/successfully_defunded"],
	className: "page-view successfully-defunded",
		
	initialize: function () {
		var _thisView = this;
		var defunded = new PunchStarter.Collections.Projects([], { extention: "successfully_defunded" });
		defunded.fetch({
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