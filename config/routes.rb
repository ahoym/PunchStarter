PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  namespace :api, :defaults => { format: :json } do
    resources :projects
  end
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end