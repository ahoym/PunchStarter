PunchStarter::Application.routes.draw do
  root :to => "static_pages#root"
  
  resources :users
  resource :session, :only => [:create, :new, :destroy]
end