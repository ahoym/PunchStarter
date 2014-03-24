window.PunchStarter.Collections.Categories = Backbone.Collection.extend ({
	model: PunchStarter.Models.Category,
	url: "/api/categories",
	
	getOrFetch: function (categoryName) {
		var model;
		var categories = this;
		
		for (var i = 0; i < this.models.length; i++) {
			var category = this.models[i].get('name');
			if (category === categoryName) {
				model = this.models[i];
				model.fetch();
				return model;
			}
		}	
		
		var model = new PunchStarter.Models.Category({ name: categoryName });
		model.save({}, {
			success: function (model) { 
				categories.add(model)
				return model;
			}
		});			
	}
		
		
		
});