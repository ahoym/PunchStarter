class Api::ProjectBodiesController < ApplicationController
  def create
    @project_body = ProjectBody.new(project_body_params)
    
    if @project_body.save
      render :json => @project_body
    else
      render :json => @project_body.errors.full_messages      
    end
  end
  
  def destroy
    
  end
  
  def update
    
  end
  
  private
  def project_body_params
    params.require(:project_body).permit(:description, :challenges, :faq)
  end
end