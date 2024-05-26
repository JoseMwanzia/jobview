Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/company', to: 'companies#create'
  get '/company', to: 'companies#index'
  get '/company/:id', to: 'companies#show'
  patch '/company/:id', to: 'companies#update'
  delete '/company/:id', to: 'companies#destroy'
  
  get '/job_seeker', to: 'job_seekers#index'
  get '/job_seeker/:id', to: 'job_seekers#show'
end
