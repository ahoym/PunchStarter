class Api::ProjectsController < ApplicationController
  before_filter :set_project, :only => [:destroy, :show]
  
  def create
    @project = current_user.created_projects.create(project_params)
    
    if @project.save
      # render :json => @project
      redirect_to api_project_url(@project)
    else
      render :json => @project.errors.full_messages
    end
  end
  
  def destroy
    @project.destroy
    redirect_to :index
  end
  
  def index
    @projects = Project.all
    
    respond_to do |format|
      format.html {render :index}
      format.json { render :json => @projects }
    end
  end
  
  def new
    @project = Project.new
    
    render "api/projects/new"
  end
  
  def show
    render :show
  end
  
  private
  def project_params
    params.require(:project)
      .permit(:title, :category, :short_blurb, :project_location, 
              :funding_duration, :funding_goal, :creator)
  end
  
  def set_project 
    @project = Project.find(params[:id])
  end
end
