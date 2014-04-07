
function successfullyFunded() {
	if (!window._successfullyFunded) {
		window._successfullyFunded = [];
		
		for (var i = 0; i < gon.successfully_funded.length; i++) {
			PunchStarter.categories.forEach( function(category) {
				category.projects().models.forEach( function(project) {
					if (project.id === gon.successfully_funded[i]) {
						window._successfullyFunded.push(project);
					}
				})
			});
		}
	}
	
	return window._successfullyFunded;	
}

function successfullyDefunded() {
	if (!window._successfullyDefunded) {
		window._successfullyDefunded = [];
		
		for (var i = 0; i < gon.successfully_defunded.length; i++) {
			PunchStarter.categories.forEach( function(category) {
				category.projects().models.forEach( function(project) {
					if (project.id === gon.successfully_defunded[i]) {
						window._successfullyDefunded.push(project);
					}
				})
			});
		}
	}
	
	return window._successfullyDefunded;	
}