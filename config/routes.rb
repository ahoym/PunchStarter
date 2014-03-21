PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  # :defaults => { format: :json } add in later for backbone.
  namespace :api do
    resources :project do
      resources :project_bodies, :only => [:create, :destroy, :update]
    end
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end