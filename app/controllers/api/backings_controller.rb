class BackingsController < ApplicationController
  
  def create
    @backing = Backing.new(backing_params)
    
    if @backing.save
      render :json => @backing
    else
      render :json => @backing.errors.full_messages, status: 422
    end
  end

  private
  def backing_params
    params.require(:backing).permit(:investment, :project)
  end
end
