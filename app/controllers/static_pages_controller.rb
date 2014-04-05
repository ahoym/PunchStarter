class StaticPagesController < ApplicationController
  def root
    categories = Project::CATEGORIES
    
    # putting limits on because I don't believe pagination can be done on these queries.
    
    most_popular = Project.limit(4).
                           joins('LEFT JOIN stars ON stars.liked_project_id = projects.id').
                           select('projects.*, COUNT(stars.id) AS stars_count').
                           group('projects.id').
                           order('stars_count DESC')
                           
    most_recent = Project.all.order("created_at DESC").limit(4)
                           
    successfully_funded = Project.limit(4).
                                  joins('LEFT JOIN backings ON backings.backed_project_id = projects.id').
                                  select('projects.*, SUM(backings.investment)').
                                  group('projects.id').
                                  having('SUM(backings.investment) >= projects.funding_goal')
                                  
    successfully_defunded = Project.limit(4).
                                    joins('LEFT JOIN backings ON backings.backed_project_id = projects.id').
                                    select('projects.*, SUM(backings.investment)').
                                    group('projects.id').
                                    having('SUM(backings.investment) < ?', 0)                                  
    
    staff_picks = Project.joins('LEFT JOIN stars ON stars.liked_project_id = projects.id').
                          joins('JOIN project_categories ON project_categories.project_id = projects.id').
                          joins('JOIN categories ON project_categories.category_id = categories.id').
                          where('stars.liker_id = ?', 1).
                          order('categories.name ASC')
                              
    gon.filepicker_api = ENV["FILEPICKER_API"]
    gon.categories = categories
    gon.most_recent = most_recent.map { |mr| mr.id }
    gon.successfully_funded = successfully_funded.map { |sf| sf.id }
    gon.successfully_defunded = successfully_defunded.map { |sd| sd.id }    
    gon.most_popular = most_popular.map { |mp| mp.id }
    gon.staff_picks = staff_picks.map{ |sp| sp.id }
    
    # Right now this is only used for the name. Will be irrelevant once a
    #  User model is implemented at the Backbone layer. A lot of the above
    #  queries will also be unnecessary with this.
    if logged_in?
      gon.currentUserId = current_user.id
      gon.admin = current_user.admin
    end    
    
    render :root
  end
end
