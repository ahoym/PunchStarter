json.array!(@categories) do |category|
	json.partial!("api/categories/category", 
								:category => category, 
								:projects => category.projects
							 )
end