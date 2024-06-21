class JobSeekerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :created_at

  # has_many :applications
  has_many :companies, through: :applications
  has_many :posts, through: :applications
end
