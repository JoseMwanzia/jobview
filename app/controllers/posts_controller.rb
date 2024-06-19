class PostsController < ApplicationController

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

    private

    def posts_params
        params.permit(:title, :department, :jobDescription, :responsibilities, :qualifications, 
        :skills,
        :bonusSkills,
        :experience,
        :location,
        :jobType,
        :remote,
        :comments,
        :company_id)
    end
end
