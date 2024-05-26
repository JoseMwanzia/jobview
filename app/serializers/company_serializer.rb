class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :email, :description, :image_url, :job_title, :job_description
end
