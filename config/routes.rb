Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/company', to: 'companies#create'
  get '/company', to: 'companies#index'
  get '/company/:id', to: 'companies#show'
  patch '/company/:id', to: 'companies#update'
  delete '/company/:id', to: 'companies#destroy'

end
