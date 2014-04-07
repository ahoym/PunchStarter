window.PunchStarter.Views.StaffPicks = Backbone.CompositeView.extend ({
	tagName: 'li',
	className: "page-view staff-picks",
	template: JST["home_page/staff_picks"],

	events: { "click .sp-category": "switchView"},

	initialize: function () {
		var _thisView = this;
		this.picks = new PunchStarter.Collections.Projects([], { extension: "staff_picks" });
		this.picks.fetch({
			success: function (projects) {
				_thisView.render(projects);
			}
		});
	},
	
	render: function (projects) {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		// default view, is switched with switchView anyhow.
		var view = this.getView("tech");
		this.$('.staff-pick-project').html(view.render().$el);
		
		return this;
	},
	
	getView: function (category) {
		var targetProject = this.picks.find( function (model) {	return model._category === category; });
		
		return new PunchStarter.Views.FrontStaffView({ 
							model: targetProject, 
							category: category
						})
	},
	
	switchView: function (event) {
		event.preventDefault();
		this.$('.staff-pick-project').empty();
		var category = $(event.currentTarget).data('cat');
		
		var view = this.getView(category);
		this.$('.staff-pick-project').html(view.render().$el);
	}
});