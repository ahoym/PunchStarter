PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  namespace :api do
    resources :categories
    resources :projects do
      resources :project_bodies, :only => [:new, :create, :destroy, :update]
      resources :backings, :only => [:create]
      resources :stars, :only => [:create, :destroy]
    
      collection do
        get 'most_recent', to: 'projects#most_recent'
        get 'most_popular', to: 'projects#most_popular'
        get 'successfully_funded', to: 'projects#funded'
        get 'successfully_defunded', to: 'projects#defunded'
        get 'staff_picks', to: 'projects#staff_picks'        
      end
    end
    
    get 'projects/project_location/:location', :controller => 'projects', :action => 'project_location'
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end