class ApplicationsController < ApplicationController
    def index
      if params[:job_seeker_id]
        job_seeker = JobSeeker.find(params[:job_seeker_id])
        applications = job_seeker.applications
      elsif params[:company_id]
        company = Company.find(params[:company_id])
        applications = company.applications
      else
        applications = Application.all
      end
      render json: applications, status: 200
    end
  
    def show
      application = Application.find(params[:id])
      render json: application, status: 200
    end
  
    def create
      job_seeker = JobSeeker.find(application_params[:job_seeker_id])
      company = Company.find(params[:company_id])
      application = job_seeker.applications.new(application_params.except(:resume))
      application.company = company
  
      if application.save
        if application_params[:resume]
          application.resume.attach(application_params[:resume])
        end
        render json: application, status: :created
      else
        render json: application.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      application = Application.find(params[:id])
      application.destroy
      head :no_content
    end
  
    private
  
    def application_params
      params.require(:application).permit(:job_seeker_id, :company_id, :name, :email, :address, :phone, :resume)
    end
end
