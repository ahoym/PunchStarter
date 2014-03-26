# == Schema Information
#
# Table name: projects
#
#  id               :integer          not null, primary key
#  title            :text
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
    "art" => "Art", 
    "comics" => "Comics", 
    "dance" => "Dance", 
    "design" => "Design", 
    "fashion" => "Fashion",
    "media" => "Film & Video",
    "food" => "Food",
    "games" => "Games",
    "music" => "Music",
    "photo" => "Photography",
    "publishing" => "Publishing",
    "tech" => "Technology",
    "theater" => "Theater"
  }
  
  validates :title, :short_blurb, :project_location,
            :funding_duration, :funding_goal, :creator, :presence => true
            
  has_many(
    :stars,
    :foreign_key => :liked_project_id,
    :class_name => "Star"
  )

  has_many(
    :likers,
    :through => :stars,
    :source => :liker
  )

  has_many(
    :backings,
    :foreign_key => :backed_project_id,
    :class_name => "Backing"
  )
  
  has_many(
    :backers,
    :through => :backings,
    :source => :backer
  )

  has_one(
    :category_type,
    :foreign_key => :project_id,
    :class_name => "ProjectCategory"
  )
  
  has_one(
    :category, :inverse_of => :projects,
    :through => :category_type,
    :source => :category
  )
  
  has_one(
    :project_body,
    :foreign_key => :project_id,
    :class_name => "ProjectBody"
  )
  
  belongs_to(
    :creator, :inverse_of => :created_projects,
    :foreign_key => :creator_id,
    :class_name => "User"
  )
end