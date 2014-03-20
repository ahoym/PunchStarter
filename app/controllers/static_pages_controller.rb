class StaticPagesController < ApplicationController
  def root
    categories = Project::CATEGORIES
    gon.categories = categories
    
    render :root
  end
end
