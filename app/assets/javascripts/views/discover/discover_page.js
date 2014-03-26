window.PunchStarter.Views.Discover = Backbone.CompositeView.extend ({
	className: "discover",
	template: JST["discover/discover"],
	
	events: { 
		"click .category": "showCategory"
	},
	
	render: function () {
		var renderedContent = this.template({ categories: this.collection });
		this.$el.html(renderedContent);
		// this.renderSubviews();
		
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

		// this.addSubview(".discover-categories-body", categoryView);
		$(".discover-categories-body").append(categoryView.render().$el);		
	}
});