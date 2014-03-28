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
	:updated_at,
	:filepicker_url
)

project_body ||= nil
unless project_body.nil?
	json.project_body(project_body)
end

backings ||= nil
unless backings.nil?
	json.backings(backings) do |backing|
		json.partial!("api/backings/backing", :backing => backing)
	end
end

stars ||= nil
unless stars.nil?
	json.stars(stars) do |star|
		json.partial!("api/stars/star", :star => star)
	end
end