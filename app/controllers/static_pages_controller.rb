class StaticPagesController < ApplicationController
  def root
    categories = Project::CATEGORIES
    gon.categories = categories

    if logged_in?
      gon.currentUser = current_user.name
    end

    render :root
  end
end
