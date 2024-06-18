class Company < ApplicationRecord
    has_secure_password
    validates :company_name, :email, :password, :password_confirmation, presence: true
    validates :company_name, :email, uniqueness: true
    validates :password, length: { in: 8..20 }
    validates :password_confirmation, length: { in: 8..20 }
    
    has_many :posts
    has_many :applications
    has_many :job_seekers, through: :applications
end
