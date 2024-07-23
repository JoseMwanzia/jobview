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

    # post '/job_seeker/:id'
    def create_image
        job_seeker = JobSeeker.find(params[:id])
        # company = Company.find(params[:company_id])
        # job_seeker.new(registration_params.except(:image))
    
        if job_seeker
            # byebug
          if registration_params[:image]
            job_seeker.image.attach(registration_params[:image])
          end
          render json: job_seeker, status: :created
        else
          render json: job_seeker.errors, status: :unprocessable_entity
        end
      end

    # put '/job_seeker'
    def update
        job_seeker = JobSeeker.find(params[:id])
        job_seeker.update!(registration_params[:image])
        # job_seeker.image.purge
        # job_seeker.image.attach(registration_params[:image])
        # byebug
        render json: job_seeker, status: 201
    end

    private

    def registration_params
        params.permit(:first_name, :sur_name, :last_name, :image, :email, :password, :password_confirmation)
    end

    def authorize
        @current_user = JobSeeker.find_by(id: session[:job_seeker_id])
        render json: {errors: ["Not Logged In"]}, status: 422 unless @current_user
    end

end
