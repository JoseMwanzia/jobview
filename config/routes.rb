Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/company', to: 'companies#create'
  get '/company', to: 'companies#index'
  get '/company/:id', to: 'companies#show'
  patch '/company/:id', to: 'companies#update'
  delete '/company/:id', to: 'companies#destroy'
  
  
  get '/me_company', to: 'sessions#create'
  get '/me_sekeer', to: 'sessions#create_seeker'
  
  get '/job_seeker', to: 'job_seekers#index'
  get '/job_seeker/:id', to: 'job_seekers#show'
  post '/job_seeker', to: 'job_seekers#create'
end
