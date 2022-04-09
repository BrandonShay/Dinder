# Rails.application.routes.draw do
#   mount_devise_token_auth_for 'User', at: 'api/auth'
  
#   namespace :api do
#     resources :users, except: [:index, :show, :create, :destroy, :update] do
#       resources :foods do
#         put '/switchOwner', to: 'foods#switchOwner'
#       end
#     end
#     get '/foods/randomFoods', to: 'foods#randomFoods'
#   end
#     resources :dinners do
  
# end

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users, only: :update

    resources :users, except: [:index, :show, :create, :destroy, :update] do
      resources :foods do
        put '/switchOwner', to: 'foods#switchOwner'
      end
      get '/randomFoods', to: 'foods#randomFoods'
    end

    resources :foods , except: [:index, :show, :create, :destroy, :update] do
      resources :dinners
    end
    
  end
  
end