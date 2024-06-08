class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :job_seeker_id, :company_id, :created_at, :updated_at

  belongs_to :job_seeker
  belongs_to :company
end
