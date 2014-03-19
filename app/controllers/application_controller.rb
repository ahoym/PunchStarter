class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :current_user, :logged_in?, :input_auth_token, :require_signed_out
  
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  
  def input_auth_token
    "<input 
      type=\"hidden\"
      name=\"authenticity_token\"
      value=\"#{form_authenticity_token}\">".html_safe
  end
  
  def logged_in?
    !!current_user
  end
  
  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end
    
  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  
  def require_user
    redirect_to new_session_url unless logged_in?
  end
  
  def require_signed_out
    redirect_to user_url(current_user) if logged_in?
  end
end
