class SessionsController < ApplicationController
    before_action :authorize_company, except: [:create, :create_seeker, :destroy_jobseeker]
    before_action :authorize_jobseeker, except: [:create, :create_seeker, :destroy_company]

    # get '/me_company' "CREATING SESSIONS"
    def create
        company = Company.find_by(email: params[:email])
        if company&.authenticate(params[:password])
            session[:company_id] = company.id
            render json: company
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end
    end

     # get '/me_sekeer' "CREATING SESSIONS"
    def create_seeker
        job_seeker = JobSeeker.find_by(email: params[:email])
        if job_seeker&.authenticate(params[:password])
            session[:job_seeker_id] = job_seeker.id
            render json: job_seeker, status: :ok
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end
    end

    def destroy_company
        session.delete :company_id
        head :no_content
    end

    # delete '/logout_jobseeker'
    def destroy_jobseeker
        session.delete :job_seeker_id
        head :no_content
    end

    private

    def authorize_company
        @company_user = Company.find_by(id: session[:company_id])
        render json: { errors: ["Not Logged In"] }, status: 422 unless @company_user
    end

    def authorize_jobseeker
        @job_seeker_user = JobSeeker.find_by(id: session[:job_seeker_id])
        render json: { errors: ["Not Logged In"] }, status: 422 unless @job_seeker_user
    end
end
