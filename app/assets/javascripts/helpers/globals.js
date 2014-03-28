function staffPicks() {
	if (!window._staffPicks) {
		window._staffPicks = [];
		
		for (var i = 0; i < gon.staff_picks.length; i++) {
			PunchStarter.categories.models[i].projects().forEach( function(project) {
				if (project.id == gon.staff_picks[i]) {
					window._staffPicks.push(project);
				}
			});
		}
	}
	
	return window._staffPicks;
}

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