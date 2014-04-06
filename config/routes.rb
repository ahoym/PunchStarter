PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  namespace :api do
    resources :categories
    resources :projects do
      resources :project_bodies, :only => [:new, :create, :destroy, :update]
      resources :backings, :only => [:create]
      resources :stars, :only => [:create, :destroy]
    end
    
    get 'projects/project_location', to: 'projects#location'
    get 'projects/most_recent', to: 'projects#most_recent'
    get 'projects/most_popular', to: 'projects#most_popular'
    get 'projects/successfully_funded', to: 'projects#funded'
    get 'projects/successfully_defunded', to: 'projects#defunded'
    get 'projects/staff_picks', to: 'projects#staff_picks'
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end