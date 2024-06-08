class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :email, :created_at

  has_many :applications
  has_many :job_seekers, through: :applications
end
