class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address, :phone, :created_at, :resume_url, :post_id
  # attributes :id, :name, :email, :address, :phone, :job_seeker_id, :company_id, :created_at, :updated_at, :resume_url

  belongs_to :job_seeker
  belongs_to :company
  belongs_to :post # will serialize the posts if needed
end
