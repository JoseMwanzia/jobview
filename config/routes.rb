Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/company', to: 'companies#create'
  post '/applications', to: 'applications#create'
  get '/companies', to: 'companies#index'
  get '/applicableCompanies', to: 'job_seekers#companies'
  get '/company/:id', to: 'companies#show'
  get '/my_company', to: 'companies#show'
  get '/jobseeker', to: 'job_seekers#show'
  patch '/company/:id', to: 'companies#update'
  delete '/company/:id', to: 'companies#destroy'
  
  
  post '/me_company', to: 'sessions#create'
  post '/me_sekeer', to: 'sessions#create_seeker'
  delete '/logout', to: 'sessions#destroy_company'
  delete '/logout_jobseeker', to: 'sessions#destroy_jobseeker'
  
  
  get '/job_seeker', to: 'job_seekers#index'
  get '/job_seeker/:id', to: 'job_seekers#show'
  post '/job_seeker', to: 'job_seekers#create'
  put '/job_seeker/:id', to: 'job_seekers#update'

  resources :job_seekers do
    resources :applications, only: [:index, :create]
  end

  resources :companies do
    resources :applications, only: [:index, :create, :show]
    resources :posts, only: [:index, :create, :show]
  end

  get '/posts', to: 'posts#index'
  post '/posts/:company_id', to: 'posts#create'

  resources :applications, only: [:index, :show, :destroy]
end
