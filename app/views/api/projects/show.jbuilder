json.partial!(
	"api/projects/project", 
	:project => @project, 
	:project_body => @project_body,
	:backings => @backings,
	:stars => @stars,
	:category => @project.category.name,
	:creator => @project.creator
)