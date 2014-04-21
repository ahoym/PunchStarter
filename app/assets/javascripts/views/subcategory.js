window.PunchStarter.Views.Subcategory = Backbone.View.extend ({
	tagName: "li",
	template: function() {
		var templateName = "home_page/" + this.extension
		return JST[templateName];
	},
	className: "page-view",
	
	initialize: function (options) {
		this.extension = options.extension;
		
		var _thisView = this;
		var funded = new PunchStarter.Collections.Projects([], { extension: this.extension });
		funded.fetch({
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