Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    devise_for :users, path_names: { sign_in: :login, sign_out: :logout }
  end
  
  root "home#index"
  get "*path", to: "home#index", via: :all
end
