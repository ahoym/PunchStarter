json.(
	category, 
	:id, 
	:name, 
	:created_at, 
	:updated_at
)

projects ||= nil
unless projects.nil?
	json.projects(projects) do |project|
		json.partial!("api/projects/project", 
									:project => project, 
									:project_body => project.project_body,
									:backings => project.backings,
									:stars => project.stars,
									:category => category.name
									)
	end
end