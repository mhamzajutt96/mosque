# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :masjids
  root to: 'home#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :expenses
    end
  end
end
