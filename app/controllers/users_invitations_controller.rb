class UsersInvitationsController < Devise::InvitationsController
  before_action :authenticate_user!, only: [:create]

  def create
    User.invite!(invite_params, current_user)
    render json: { success: ['User created.'] }, status: :created
  end

  def edit
    redirect_to "http://localhost:3000/onboarding?invitation_token=#{params[:invitation_token]}"
  end

  def update
    @user = User.accept_invitation!(accept_invitation_params)
    if @user.errors.empty?
      render json: { notice: "Set password successfully", success: ['User updated.'] }, status: :accepted
    else
      render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
    end
  end

  def invite_params
    params.require(:user).permit(:email)
  end

  def accept_invitation_params
    params.require(:users_invitation).permit(:password, :password_confirmation, :invitation_token)
  end
end