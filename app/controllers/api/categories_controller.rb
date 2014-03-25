class Api::CategoriesController < ApplicationController
  
  def create
    @category = Category.new(category_params)
    
    if @category.save
      render :json => @category
    else
      render :json => @category.errors.full_messages, :status => 422
    end
  end
  
  def index
    @categories = Category.all    
    render :index
  end
  
  def show
    @category = Category.find(params[:id])
    @projects = @category.projects
    
    render "api/categories/show"
  end
  
  private
  def category_params
    params.require(:category).permit(:name)
  end
end