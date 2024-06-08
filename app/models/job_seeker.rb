class JobSeeker < ApplicationRecord
    has_secure_password
    validates :first_name, :sur_name, :last_name, :email, :password, :password_confirmation, presence: true
    # has_many :companies
    has_many :applications
    has_many :companies, through: :applications
end
