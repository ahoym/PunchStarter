PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  # :defaults => { format: :json } add in later for backbone.
  namespace :api do
    resources :projects
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end