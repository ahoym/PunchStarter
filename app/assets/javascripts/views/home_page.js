/* globals window, PunchStarter, Backbone */
"use strict"

window.PunchStarter.Views.HomePage = Backbone.CompositeView.extend ({
	className: "home-page",
	template: JST["home_page/home_page"],
	
	initialize: function (options) {
	},
		
	render: function () {
		var renderedContent = this.template();
		
		var carousel = new PunchStarter.Views.Carousel();
		this.$el.append(carousel.render().$el);
		
		var staffPicks = new PunchStarter.Views.StaffPicks();
		this.$el.append(staffPicks.render().$el);
		
		return this;
	}
});