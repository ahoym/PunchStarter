window.PunchStarter.Views.StaffPicks = Backbone.View.extend ({
	tagName: 'li',
	className: "staff-picks",
	template: JST["home_page/staff_picks"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;
	}
});