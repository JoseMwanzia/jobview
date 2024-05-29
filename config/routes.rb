Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/company', to: 'companies#create'
  get '/company', to: 'companies#index'
  get '/me', to: 'companies#show'
  patch '/company/:id', to: 'companies#update'
  delete '/company/:id', to: 'companies#destroy'
  
  
  post '/me_company', to: 'sessions#create'
  get '/me_sekeer', to: 'sessions#create_seeker'
  delete '/logout', to: 'sessions#destroy_company'
  
  get '/job_seeker', to: 'job_seekers#index'
  get '/job_seeker/:id', to: 'job_seekers#show'
  post '/job_seeker', to: 'job_seekers#create'
end
