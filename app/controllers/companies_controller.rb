class CompaniesController < ApplicationController

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
        company = Company.create!(company_params)
        if company&.authenticate(params[:password])
            render json: company, status: 201
        end
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

    def company_params
        params.permit(:company_name, :email, :password, :password_confirmation)
    end
end
