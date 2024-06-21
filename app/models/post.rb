class Post < ApplicationRecord
  validates :title, :department, :jobDescription, :responsibilities, :qualifications, :experience, :location, :jobType, :remote, presence: true
  belongs_to :company
  # belongs_to :application
  has_many :applications
  has_many :job_seekers, through: :applications
end
