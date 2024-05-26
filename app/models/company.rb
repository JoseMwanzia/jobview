class Company < ApplicationRecord
    has_secure_password
    validates :company_name, :email, :password, :password_confirmation, :description, :image_url, :job_title, :job_description, presence: true
    validates :password, length: { in: 8..16 }
end
