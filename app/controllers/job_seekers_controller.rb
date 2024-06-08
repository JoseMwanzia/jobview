class JobSeekersController < ApplicationController
    before_action :authorize, except: :create

    # get '/allCompanies'
    def companies
        companies = Company.all
        render json: companies, status: 200
    end

    # get '/job_seeker'
    def index
        jobseekers = JobSeeker.all
        render json: jobseekers, status: 200
    end

    # get '/job_seeker/:id'
    def show
        # jobseeker = JobSeeker.find(params[:id])
        render json: @current_user, status: 200
    end

    # post '/job_seeker'
    def create
        job_seeker = JobSeeker.create!(registration_params)
        session[:job_seeker_id] = job_seeker.id
        render json: job_seeker, status: 201
    end

    private

    def registration_params
        params.permit(:first_name, :sur_name, :last_name, :email, :password, :password_confirmation)
    end

    def authorize
        @current_user = JobSeeker.find_by(id: session[:job_seeker_id])
        render json: {errors: ["Not Logged In"]}, status: 422 unless @current_user
    end

end
