class Api::StarsController < ApplicationController
  
  def create
    @star = current_user.stars.create(star_params)
    
    if @star.save
      render :json => @star
    else
      render :json => @star.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @star = Star.find_by_liker_id(current_user.id)
    @star.destroy
    
    render :json => @star
  end
  
  private
  def star_params
    params.require(:star).permit(:liked_project_id)
  end
end