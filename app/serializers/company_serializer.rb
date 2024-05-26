class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :email
end
