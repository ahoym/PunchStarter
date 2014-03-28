# == Schema Information
#
# Table name: project_categories
#
#  id          :integer          not null, primary key
#  project_id  :integer
#  category_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class ProjectCategory < ActiveRecord::Base
  
  validates :project_id, :category_id, :presence => true
  
  belongs_to(
    :category,
    :foreign_key => :category_id,
    :class_name => "Category"
  )
  
  belongs_to(
    :project,
    :foreign_key => :project_id,
    :class_name => "Project"
  )
end
