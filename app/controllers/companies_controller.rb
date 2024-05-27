class CompaniesController < ApplicationController
    before_action :authorize, except: :create

    # get '/companies'
    def index
        companies = Company.all
        render json: companies, status: 200
    end

    # get '/company/:id'
    def show
        company = Company.find(params[:id])
        render json: company, status: :ok
    end

    # post '/company'
    def create
        company = Company.create!(registration_params)
        session[:company_id] = company.id
        render json: company, status: 201
    end

    # put '/company/:id'
    def update
        company = Company.find(params[:id])
        company.update!(company_params)
        render json: company, status: 201
    end

    # delete '/company/:id'
    def destroy
        company = Company.find(params[:id])
        company.destroy!
        head :no_content
    end

    private 

    def registration_params
        params.permit(:company_name, :email, :password, :password_confirmation)
    end

    def company_params
        params.permit(:company_name, :email, :password, :password_confirmation)
    end

    def authorize
        @company_user = Company.find_by(id: session[:company_id])
        render json: { errors: ["Not Logged In"] }, status: 422 unless @company_user
    end
end
