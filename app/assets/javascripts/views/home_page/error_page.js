window.PunchStarter.Views.NothingHere = Backbone.View.extend ({
	className: "container",
	template: JST["home_page/nothing_here"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;
	}
});