class UsersController < ApplicationController
  before_filter :set_user, :only => [:show]

  def create
    @user = User.new(user_params)
    
    if @user.save
      redirect_to user_url(@user)
      # render :json => @user
    else
      flash.now[:errors] = @user.errors.full_messages
      # render :json => @user.errors.full_messages, status: 422
      render :new
    end
  end
  
  def new
    @user = User.new
    render :new
  end

  def show
    render :show
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
