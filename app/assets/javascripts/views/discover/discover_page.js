window.PunchStarter.Views.Discover = Backbone.CompositeView.extend ({
	className: "discover",
	template: JST["discover/discover"],
	
	events: { 
		"click .category": "showCategory"
	},
	
	render: function () {
		var renderedContent = this.template({ categories: this.collection });
		this.$el.html(renderedContent);

		var popularProjects = new PunchStarter.Views.Subcategory({ extension: "most_popular" });
		this.$('.page-views').append(popularProjects.$el);
		
		var successfullyDefunded = new PunchStarter.Views.Subcategory({ extension: "successfully_defunded" });
		this.$('.page-views').append(successfullyDefunded.$el);
		
		return this;
	},
	
	showCategory: function (event) {
		$(".discover-categories-body").empty();
		event.preventDefault();
		var $categoryName = this.$(event.currentTarget).data('name');
		var category = PunchStarter.categories.getOrFetch($categoryName);
		
		var categoryView = new PunchStarter.Views.CategoryShow({
			model: category
		});

		$(".discover-categories-body").append(categoryView.render().$el);		
	}
});