require 'rails_helper'

RSpec.describe "Companies", type: :request do
  let!(:company) { FactoryBot.create(:company) }

  before do
    allow_any_instance_of(CompaniesController).to receive(:authorize).and_return(true)
  end

  describe "GET /companies" do
    it 'returns a success respose' do
      get companies_path
      puts response.body
      expect(response).to be_successful

      parsed_response = JSON.parse(response.body)
      expect(parsed_response[0]['company_name']).to eq(company.company_name)
    end
  end
end
