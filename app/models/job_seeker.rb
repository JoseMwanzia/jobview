class JobSeeker < ApplicationRecord
    has_secure_password
    validates :first_name, :sur_name, :last_name, :email, :password, :password_confirmation, presence: true
    validates :email, uniqueness: true
    validates :password, length: { in: 8..20 }
    validates :password_confirmation, length: { in: 8..20 }

    has_many :applications
    has_many :companies, through: :applications

    has_many :posts, through: :applications

    has_one_attached :image

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end
end
