PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  # :defaults => { format: :json } add in later for backbone.
  namespace :api do
    resources :projects do
      resources :project_bodies, :only => [:new, :create, :destroy, :update]
    end
    
    resources :categories
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end