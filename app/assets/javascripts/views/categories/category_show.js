window.PunchStarter.Views.CategoryShow = Backbone.View.extend ({
	className: "category-show",
	template: JST["categories/show"],
	
	initialize: function (options) {
	},
	
	render: function () {
		var renderedContent = this.template({ category: this.model });
		this.$el.html(renderedContent);
		
		var view = this;
		_(this.model.projects().models).each(function (project) {
			var miniProjectView = new PunchStarter.Views.MiniView({ model: project });
			view.$('.mini-views-field').append(miniProjectView.render().$el);
		});
		
		return this;
	}
});