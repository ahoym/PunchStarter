# == Schema Information
#
# Table name: project_bodies
#
#  id          :integer          not null, primary key
#  project_id  :integer
#  description :text
#  challenges  :text
#  faq         :text
#  created_at  :datetime
#  updated_at  :datetime
#

class ProjectBody < ActiveRecord::Base
  # validates :project, :description, :challenges, :faq, :presence => true
  
  belongs_to(
    :project,
    :foreign_key => :project_id,
    :class_name => "Project"
  )
end