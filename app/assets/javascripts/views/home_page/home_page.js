/* globals window, PunchStarter, Backbone */
"use strict"

window.PunchStarter.Views.HomePage = Backbone.CompositeView.extend ({
	className: "home-page",
	template: JST["home_page/home_page"],
	
	initialize: function (options) {
	},
		
	// to-do: subview this
	render: function () {
		var carousel = new PunchStarter.Views.Carousel();
		this.$el.append(carousel.render().$el);
			
		var renderedContent = this.template();
		this.$el.append(renderedContent);
		
		var staffPicks = new PunchStarter.Views.StaffPicks();
		this.$('.page-views').append(staffPicks.$el);
		
		// to-do replace hard coded "San Francisco, CA" with content in future-searchable field.
		var locationProjects = new PunchStarter.Views.LocationProjects({
			location: "San Francisco, CA"
		});
		this.$('.page-views').append(locationProjects.$el);
		
		var recentProjects = new PunchStarter.Views.Subcategory({ extension: "successfully_funded" });
		this.$('.page-views').append(recentProjects.$el);
		
		var successfullyFunded = new PunchStarter.Views.Subcategory({ extension: "successfully_funded" });
		this.$('.page-views').append(successfullyFunded.$el);
		
		return this;
	}
});