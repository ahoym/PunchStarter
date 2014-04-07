json.array!(@projects) do |project|
	json.partial!("api/projects/project",
		:project => project, 
		:project_body => project.project_body,
		:backings => project.backings,
		:stars => project.stars,
		:category => project.category.name,
		:creator => project.creator
		)
end