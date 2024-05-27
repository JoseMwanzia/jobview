class SessionsController < ApplicationController
    before_action :authorize, except: [:create, :create_seeker]

    # get '/me' "CREATING SESSIONS"
    def create
        company = Company.find_by(email: params[:email])
        if company&.authenticate(params[:password])
            session[:company_id] = company.id
            render json: company, status: :ok
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end
    end

     # get '/sekeer' "CREATING SESSIONS"
    def create_seeker
        job_seeker = JobSeeker.find_by(email: params[:email])
        if job_seeker&.authenticate(params[:password])
            session[:job_seeker_id] = job_seeker.id
            render json: job_seeker, status: :ok
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end
    end

end
