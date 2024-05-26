class JobSeeker < ApplicationRecord
    validates :first_name, :sur_name, :last_name, :email, :image_url, presence: true
    belongs_to :company
end
