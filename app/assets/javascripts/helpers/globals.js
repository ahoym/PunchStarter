function staffPicks() {
	if (!window._staffPicks) {
		window._staffPicks = []
		
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