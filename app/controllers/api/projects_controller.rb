class Api::ProjectsController < ApplicationController
  before_filter :set_project, :only => [:destroy, :show]
  
  def create
    @project = Project.new(project_params)
    
    if @project.save
      render :json => @project
    else
      render :json => @project.errors.full_messages
      render :new
    end
  end
  
  def destroy
    @project.destroy
    redirect_to :index
  end
  
  def edit
    
  end
  
  def index
    
  end
  
  def new
    
  end
  
  def show
    
  end
  
  def update
    
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
