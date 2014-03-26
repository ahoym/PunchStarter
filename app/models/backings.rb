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

class Backings < ActiveRecord::Base
  
  validates :backer, :backed_project, :investment, :presence => :true
  
  belongs_to :backer
  belongs_to :backed_project
end