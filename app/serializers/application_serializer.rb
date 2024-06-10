class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address, :phone, :job_seeker_id, :company_id, :created_at, :updated_at, :resume

  belongs_to :job_seeker
  belongs_to :company
end
