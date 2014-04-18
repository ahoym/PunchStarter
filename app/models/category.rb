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

  # validates :name, :presence => true, inclusion: { in: Project::CATEGORIES.keys }
  
  has_many(
    :project_categories,
    :foreign_key => :category_id,
    :class_name => "ProjectCategory"
  )
  
  has_many(
    :projects, :inverse_of => :category,
    :through => :project_categories,
    :source => :project
  )
end
