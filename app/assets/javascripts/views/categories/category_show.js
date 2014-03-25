window.PunchStarter.Views.CategoryShow = Backbone.View.extend ({
	className: "category-show",
	template: JST["categories/show"],
	
	initialize: function (options) {
	},
	
	render: function () {
		var renderedContent = this.template({ category: this.model });
		this.$el.html(renderedContent);
		return this;
	}
});