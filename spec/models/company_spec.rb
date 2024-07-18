require 'rails_helper'

RSpec.describe Company, type: :model do
  context 'before being saved' do
    it 'has secure password' do
      company = Company.create!(company_name:'Acme Corp', email: 'mail@gmail.com', password: 'password123', password_confirmation: 'password123')
      expect(company).to be_valid
      expect(company.password_digest).not_to be_nil
    end
  end
end
