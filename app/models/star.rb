# == Schema Information
#
# Table name: stars
#
#  id               :integer          not null, primary key
#  liker_id         :integer
#  liked_project_id :integer
#  created_at       :datetime
#  updated_at       :datetime
#

class Star < ActiveRecord::Base
  validates :liker_id, :liked_project_id, :presence => true
  
  belongs_to :liker,
             :foreign_key => :liker_id,
             :class_name => "User"
             
  belongs_to :liked_project,
             :foreign_key => :liked_project_id,
             :class_name => "Project"
end
