function mostPopular() {
	if (!window._mostPopular) {
		window._mostPopular = [];
		
		for (var i = 0; i < gon.most_popular.length; i++) {
			PunchStarter.categories.forEach( function(category) {
				category.projects().models.forEach( function(project) {
					if (project.id === gon.most_popular[i]) {
						window._mostPopular.push(project);
					}
				})
			});
		}
	}
	
	return window._mostPopular;
}

$(function() {
	$('a').on('click', function () {
	 $('body').scrollTop(0);	
	})
});