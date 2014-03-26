PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  namespace :api do
    resources :projects do
      resources :project_bodies, :only => [:new, :create, :destroy, :update]
      resources :backings, :only => [:create]
      resources :stars, :only => [:create, :destroy]
    end
    
    resources :categories
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end