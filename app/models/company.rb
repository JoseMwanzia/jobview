class Company < ApplicationRecord
    has_secure_password
    validates :company_name, :email, :password, :password_confirmation, presence: true
    validates :password, length: { in: 8..16 }
end
