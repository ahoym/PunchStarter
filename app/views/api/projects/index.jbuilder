json.array!(@projects) do |project|
	json.partial!("api/projects/project", 
		:project => project, 
		:project_body => project.project_body)
end