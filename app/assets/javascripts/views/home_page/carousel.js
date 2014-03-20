window.PunchStarter.Views.Carousel = Backbone.View.extend ({
	id: "myCarousel",
	className: "carousel slide",
	attributes: function () {
		return {			
			"data-ride": "carousel"
		}
	},
	template: JST["home_page/carousel"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		
		return this;
	}
})