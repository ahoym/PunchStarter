/* globals window, PunchStarter, Backbone */
"use strict"

window.PunchStarter.Views.HomePage = Backbone.CompositeView.extend ({
	className: "home-page",
	template: JST["home_page/home_page"],
	
	initialize: function (options) {
	},
		
	render: function () {
		var carousel = new PunchStarter.Views.Carousel();
		this.$el.append(carousel.render().$el);
			
		var renderedContent = this.template();
		this.$el.append(renderedContent);
		
		var staffPicks = new PunchStarter.Views.StaffPicks();
		this.$('.page-views').append(staffPicks.render().$el);
		
		var locationProjects = new PunchStarter.Views.LocationProjects({
			location: "San Francisco, CA"
		});
		this.$('.page-views').append(locationProjects.render().$el);
		
		var recentProjects = new PunchStarter.Views.MostRecent();
		this.$('.page-views').append(recentProjects.render().$el);
		
		var successfullyFunded = new PunchStarter.Views.SuccessfullyFunded();
		this.$('.page-views').append(successfullyFunded.render().$el);
		
		return this;
	}
	

});