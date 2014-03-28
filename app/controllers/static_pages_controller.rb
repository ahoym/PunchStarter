class StaticPagesController < ApplicationController
  def root
    categories = Project::CATEGORIES
    most_recent = Project.all.order("created_at DESC")
    most_popular = Project.joins('LEFT JOIN stars ON stars.liked_project_id = projects.id').
                           select('projects.*, COUNT(stars.id) AS stars_count').
                           group('projects.id').
                           order('stars_count DESC')
                           
    successfully_funded = Project.joins('LEFT JOIN backings ON backings.backed_project_id = projects.id').
                                  select('projects.*, SUM(backings.id) AS backings_count').
                                  group('projects.id').
                                  order('backings_count desc')
    
    gon.filepicker_api = ENV["FILEPICKER_API"]
    gon.categories = categories
    gon.most_recent = most_recent
    gon.most_popular = most_popular
    
    # Right now this is only used for the name. Will be irrelevant once a
    #  User model is implemented at the Backbone layer.
    if logged_in?
      gon.currentUser = current_user.name
    end    
    
    render :root
  end
end
