# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime
#  updated_at :datetime
#

class Category < ActiveRecord::Base
  CATEGORY_TYPES = [
    "art",    
    "comics",   
    "dance",    
    "design",   
    "fashion", 
    "media",   
    "food",   
    "games",  
    "music",  
    "photo",  
    "publishing",
    "tech",   
    "theater"
  ]
  
  validates :name, :presence => true, inclusion: { in: CATEGORY_TYPES }
  
  has_one(
    :project_category,
    :foreign_key => :category_id,
    :class_name => "ProjectCategory"
  )
  
  has_one(
    :project, :inverse_of => :category,
    :through => :project_category,
    :source => :project
  )
end
