class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :email, :created_at
end
