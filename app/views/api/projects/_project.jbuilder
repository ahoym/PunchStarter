json.(
	project, 
	:id, 
	:title, 
	:short_blurb, 
	:project_location, 
	:funding_duration, 
	:funding_goal, 
	:creator_id, 
	:created_at, 
	:updated_at
)

project_body ||= nil
unless project_body.nil?
	json.project_body(project_body)
end