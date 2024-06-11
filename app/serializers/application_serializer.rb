class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :resume_url
  # attributes :id, :name, :email, :address, :phone, :job_seeker_id, :company_id, :created_at, :updated_at, :resume_url

  belongs_to :job_seeker
  belongs_to :company
end
