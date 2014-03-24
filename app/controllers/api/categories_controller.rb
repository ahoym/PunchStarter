class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    
    respond_to do |format|
      format.html {render :index}
      format.json { render :json => @categories }
    end
  end

  def create
    @category = Category.new(category_params)
    
    if @category.save
      render :json => @category
    else
      render :json => @category.errors.full_messages, :status => 422
    end
  end
  
  def show
    @category = Category.find(params[:id])
    
    render :json => @category
  end
  
  private
  def category_params
    params.require(:category).permit(:name)
  end
end