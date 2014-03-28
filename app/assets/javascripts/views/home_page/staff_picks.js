window.PunchStarter.Views.StaffPicks = Backbone.CompositeView.extend ({
	tagName: 'li',
	className: "staff-picks",
	template: JST["home_page/staff_picks"],

	events: { "click .sp-category": "switchView"},

	initialize: function () {
	},
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		// default view, is switched with switchView anyhow.
		var view = this.getView("art");
		this.$('.staff-pick-project').html(view.render().$el);
		
		return this;
	},
	
	getView: function (category) {
		var targetProject = null;
		
		for (var i in staffPicks()) { 
			if (staffPicks()[i].collection.category.escape('name') === category) {
				targetProject = staffPicks()[i];
			} 
		}
		
		return new PunchStarter.Views.FrontStaffView({ 
							model: targetProject, 
							category: category
						})
	},
	
	switchView: function (event) {
		event.preventDefault();
		var category = $(event.currentTarget).data('cat');
		
		var view = this.getView(category);
		this.$('.staff-pick-project').html(view.render().$el);
	}
});