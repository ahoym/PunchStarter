window.PunchStarter.Views.FrontStaffView = Backbone.View.extend ({
	className: "front-staff-view row",
	template: JST["projects/front_staff_view"],
	
	initialize: function(options) {
		this.category = options.category
	},
	
	render: function () {
		var renderedContent = this.template({ 
			project: this.model,
			category: this.category
		});
		this.$el.html(renderedContent);
		
		return this;
	}
});