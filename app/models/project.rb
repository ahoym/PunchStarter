# == Schema Information
#
# Table name: projects
#
#  id               :integer          not null, primary key
#  title            :text
#  category         :text             not null
#  short_blurb      :text             not null
#  project_location :text             not null
#  funding_duration :integer          not null
#  funding_goal     :integer          not null
#  creator_id       :integer          not null
#  created_at       :datetime
#  updated_at       :datetime
#

class Project < ActiveRecord::Base
  validates :title, :category, :short_blurb, :project_location,
            :funding_duration, :funding_goal, :creator, :presence => true
  
  belongs_to(
    :creator,
    :foreign_key => :creator_id,
    :class_name => "User"
  )
end
