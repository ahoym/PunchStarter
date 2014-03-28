/* globals window, PunchStarter:true */
"use strict"

window.PunchStarter = {
	Models: {},
	Collections: {},
	Views: {},	
	Routers: {},

	initialize: function () {
		PunchStarter.allProjects = new PunchStarter.Collections.AllProjects();
		PunchStarter.allProjects.fetch();
		
		PunchStarter.categories = new PunchStarter.Collections.Categories();
		PunchStarter.categories.fetch({
			success: function() {
				new PunchStarter.Routers.AppRouter({
					$rootEl: $('#content')
				});
				Backbone.history.start();
			},
			error: function () { debugger }
		});
	}
};

Backbone.CompositeView = Backbone.View.extend ({
	addSubview: function (selector, subview) {
		var selectorSubviews = 
			this.subviews()[selector] || (this.subviews()[selector] = []);
		
		selectorSubviews.push(subview);
		
		var $selectorEl = this.$(selector)
		$selectorEl.append(subview.$el);
	},
	
	renderSubviews: function () {
		var view = this;
		_(this.subviews()).each (function (selectorSubviews, selector) {
			var $selectorEl = view.$(selector);
			$selectorEl.empty();
			debugger
			
			_(selectorSubviews).each (function (subview) {
				$selectorEl.append(subview.render().$el);
				subview.delegateEvents();
			});
		});
	},
	
	remove: function () {
		Backbone.View.prototype.remove.call(this);
		
		_(this.subviews()).each (function (selectorSubviews, selector) {
			_(selectorSubviews).each (function (subview) {
				subview.remove();
			});
		});
	},
	
	removeSubview: function (selector, subview) {
		var selectorSubviews = 
			this.subviews()[selector] || (this.subviews()[selector] = []);
			
		var subviewIndex = selectorSubviews.indexOf(subview);
		selectorSubviews.splice(subviewIndex, 1);
		subview.remove();
	},
	
	subviews: function () {
		if (!this._subviews) {
			this._subviews = {};
		}
		
		return this._subviews;
	}
});