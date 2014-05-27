window.PunchStarter.Views.NewBacking = Backbone.View.extend ({
	className: "project-info container",
	template: JST["backings/new"],
	
	initialize: function() {
	},
	
	events: { "submit form": "submit" },
	
	render: function () {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		
		return this;
	},
	
	submit: function (event) {
		event.preventDefault();
		var $investment = $('form').serializeJSON()["backing"].investment;
		var project = this.model;
		
		project.backings().create({ investment: $investment, backed_project_id: this.model.id }, {
			success: function () {
				Backbone.history.navigate("#/projects/" + project.id + "/" + project.collection.category.escape('name'),
					{trigger: true} 
				);
			}
		});	
	}
});