class Api::ProjectBodiesController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @project_body = ProjectBody.create(project_body_params)
    @project.project_body = @project_body
    
    if @project_body.save
      redirect_to api_project_url (@project)
      # render :json => @project_body
    else
      render :json => @project_body.errors.full_messages      
    end
  end
  
  def new
    render "api/project_bodies/new"
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