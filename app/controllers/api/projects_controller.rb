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
    
    render "api/projects/index.jbuilder"
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
  
  def project_location
    location = parse_location(params[:location])  
    @projects = Project.where('project_location = ?', location).limit(4)
    
    render "api/projects/index.jbuilder"
  end
  
  def most_recent
    @projects = Project.all.order("created_at DESC").limit(4)
    
    render "api/projects/index.jbuilder"
  end
  
  def most_popular
    @projects = Project.limit(4).
                        joins('LEFT JOIN stars ON stars.liked_project_id = projects.id').
                        select('projects.*, COUNT(stars.id) AS stars_count').
                        group('projects.id').
                        order('stars_count DESC')
    
    render "api/projects/index.jbuilder"
  end
  
  def funded
    @projects = Project.limit(4).
                        joins('LEFT JOIN backings ON backings.backed_project_id = projects.id').
                        select('projects.*, SUM(backings.investment)').
                        group('projects.id').
                        having('SUM(backings.investment) >= projects.funding_goal')

    render "api/projects/index.jbuilder"
  end
  
  def defunded
    @projects = Project.limit(4).
                        joins('LEFT JOIN backings ON backings.backed_project_id = projects.id').
                        select('projects.*, SUM(backings.investment)').
                        group('projects.id').
                        having('SUM(backings.investment) < ?', 0)
                        
    render "api/projects/index.jbuilder"
  end
  
  def staff_picks
    @projects = Project.joins('LEFT JOIN stars ON stars.liked_project_id = projects.id').
                        joins('JOIN project_categories ON project_categories.project_id = projects.id').
                        joins('JOIN categories ON project_categories.category_id = categories.id').
                        where('stars.liker_id = ?', 1).
                        order('categories.name ASC')

    render "api/projects/index.jbuilder"
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
  
  # Converts san+francisco-ca to San Francisco, CA. Looks for latter in database.
  # Notes: May run into problems if a city has a '-' in it. Is there such a city?
  def parse_location(location)
    location.split('+').map(&:capitalize).join(" ").gsub(/-(\w+)/) { ", #{$1.upcase}" }
  end
end