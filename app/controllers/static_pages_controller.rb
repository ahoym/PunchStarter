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
    
    staff_picks = Project.joins('LEFT JOIN stars ON stars.liked_project_id = projects.id').
                          joins('JOIN project_categories ON project_categories.project_id = projects.id').
                          joins('JOIN categories ON project_categories.category_id = categories.id').
                          where('stars.liker_id = ?', 1).
                          order('categories.name ASC')
                              
    gon.filepicker_api = ENV["FILEPICKER_API"]
    gon.categories = categories
    gon.most_recent = most_recent
    gon.most_popular = most_popular
    gon.staff_picks = staff_picks.map{ |sp| sp.id }
    
    # Right now this is only used for the name. Will be irrelevant once a
    #  User model is implemented at the Backbone layer. A lot of the above
    #  queries will also be unnecessary with this.
    if logged_in?
      gon.currentUser = current_user.name
      gon.admin = current_user.admin
    end    
    
    render :root
  end
end
