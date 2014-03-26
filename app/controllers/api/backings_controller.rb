class Api::BackingsController < ApplicationController
  
  def create
    @backing = current_user.backings.create(backing_params)
    
    if @backing.save
      render :json => @backing
    else
      render :json => @backing.errors.full_messages, status: 422
    end
  end

  def show
    
  end

  private
  def backing_params
    params.require(:backing).permit( :investment, :backed_project_id)
  end
end
