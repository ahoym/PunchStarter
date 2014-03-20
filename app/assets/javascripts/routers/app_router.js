/* globals window, PunchStarter, Backbone */

window.PunchStarter.Routers.AppRouter = Backbone.Router.extend ({
	routes: {
		"": "homePage"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	homePage: function () {
		var homePageView = new PunchStarter.Views.HomePage();
		this._swapView(homePageView);
	},
	
	_swapView: function (view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		
		this.$rootEl.html(view.render().$el);
	}
	
});