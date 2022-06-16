class UsersSessionsController < Devise::SessionsController
  before_action :authenticate_user!

  def destroy
    sign_out current_user
  end

end