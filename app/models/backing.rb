# == Schema Information
#
# Table name: backings
#
#  id                :integer          not null, primary key
#  investment        :integer          not null
#  backer_id         :integer          not null
#  backed_project_id :integer          not null
#  created_at        :datetime
#  updated_at        :datetime
#

class Backing < ActiveRecord::Base
  
  # validates :backer_id, :backed_project_id, :investment, :presence => :true
  
  belongs_to :backer,
             :foreign_key => :backer_id,
             :class_name => "User"
  
  belongs_to :backed_project,
             :foreign_key => :backed_project_id,
             :class_name => "Project"
end
