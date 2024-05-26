class JobSeekersController < ApplicationController

    # get '/job_seeker'
    def index
        jobseekers = JobSeeker.all
        render json: jobseekers, status: 200
    end

    # get '/job_seeker/:id'
    def show
        jobseeker = JobSeeker.find(params[:id])
        render json: job_seeker, status: 200
    end
    
end
