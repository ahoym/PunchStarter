window.PunchStarter.Views.Carousel = Backbone.View.extend ({
	id: "home-page-carousel",
	className: "carousel slide carousel-fade",
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