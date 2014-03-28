class Api::ProjectsController < ApplicationController
  before_filter :set_project, :only => [:destroy, :show]
  before_filter :require_user, :only => [:new, :create]
  
  def create
    params[:project].merge(creator_id: current_user.id)
    @project = current_user.created_projects.create(project_params)
    @category = Category.find_by_name(params[:category_name])
    @project.category = @category

    if @project.save
      render :json => @project
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
    
    render :index
  end
  
  def new
    @project = Project.new
    
    render "api/projects/new"
  end
  
  def show
    @project_body = @project.project_body
    @backings = @project.backings
    @stars = @project.stars
    
    render "api/projects/show"
  end
  
  private
  def project_params
    params.require(:project)
      .permit(:title, :short_blurb, :project_location, 
              :funding_duration, :funding_goal, :filepicker_url, :creator)
  end
    
  def set_project 
    @project = Project.find(params[:id])
  end
end