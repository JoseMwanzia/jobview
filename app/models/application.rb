class Application < ApplicationRecord
validates :name, :email, :address, :phone, presence: true

  belongs_to :job_seeker
  belongs_to :company
  belongs_to :post
  
  has_one_attached :resume, dependent: :destroy
  def resume_url
    Rails.application.routes.url_helpers.url_for(resume) if resume.attached?
  end



  
end
