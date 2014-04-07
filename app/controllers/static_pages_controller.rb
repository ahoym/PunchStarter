class StaticPagesController < ApplicationController
  def root
    gon.categories = Project::CATEGORIES
    gon.filepicker_api = ENV["FILEPICKER_API"]
    
    if logged_in?
      gon.currentUserId = current_user.id
    end    
    
    render :root
  end
end
