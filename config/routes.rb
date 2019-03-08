Rails.application.routes.draw do
root 'teams#index'

get 'team_form', to: 'teams#form'
resources :teams do
  resources :players
  end
end
