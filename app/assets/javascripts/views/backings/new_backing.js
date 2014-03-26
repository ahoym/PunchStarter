window.PunchStarter.Views.NewBacking = Backbone.View.extend ({
	template: JST["backings/new"],
	
	events: { "submit form": "submit" },
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;
	},
	
	submit: function (event) {
		event.preventDefault();
		debugger
	}
});