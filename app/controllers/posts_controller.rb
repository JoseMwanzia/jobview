class PostsController < ApplicationController
    before_action :authorize_company_or_jobSeeker

    # get '/posts'
    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    # post '/posts'
    def create
        company = Company.find(params[:company_id])
        post = company.posts.create!(posts_params)
        render json: post, status: 201
    end

    # delete '/posts/:id'
    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        head :no_content
    end

    private

    def posts_params
        params.permit(:title, :department, :jobDescription, :responsibilities, :qualifications, 
        :skills,
        :bonusSkills,
        :experience,
        :location,
        :jobType,
        :remote,
        :comments)
    end

    def authorize_company_or_jobSeeker
        unless authorize_company || authorize_jobseeker
          render json: {errors: "Not Logged In!!"}, status: 422
        end
    end

    def authorize_company
    @company_user = Company.find_by(id: session[:company_id])
    end

    def authorize_jobseeker
    @jobSeeker_user = JobSeeker.find_by(id: session[:job_seeker_id])
    end
end
