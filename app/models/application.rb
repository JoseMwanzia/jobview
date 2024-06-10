class Application < ApplicationRecord
  belongs_to :job_seeker
  belongs_to :company
  
  has_one_attached :resume

  validates :name, :email, :address, :phone, presence: true

  
end
