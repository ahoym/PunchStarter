class SessionsController < ApplicationController
  before_filter :require_signed_out, :only => [:new]
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if @user
      login!(@user)
      redirect_to "/"
    else
      flash.now[:errors] = ["Invalid login combination."]
      render :new
    end
  end
  
  def new
    render :new
  end
  
  def destroy
    logout!
    redirect_to new_session_url
  end
end
