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
  CATEGORIES = {
    :art => "Art", 
    :comics => "Comics", 
    :dance => "Dance", 
    :design => "Design", 
    :fashion => "Fashion",
    :media => "Film & Video",
    :food => "Food",
    :games => "Games",
    :music => "Music",
    :photo => "Photography",
    :publishing => "Publishing",
    :tech => "Technology",
    :theater => "Theater"
  }
  
  validates :title, :category, :short_blurb, :project_location,
            :funding_duration, :funding_goal, :creator, :presence => true
  validates :category, inclusion: { in: CATEGORIES.values }
  
  belongs_to(
    :creator, :inverse_of => :created_projects,
    :foreign_key => :creator_id,
    :class_name => "User"
  )
end
