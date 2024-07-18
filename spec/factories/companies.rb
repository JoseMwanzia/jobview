# spec/factories/companies.rb
FactoryBot.define do
    factory :company do
      company_name { "Acme Corp" }
      email { "mail@gmail.com" }
      password { "password123" }
      password_confirmation { "password123" }
    end
  end
  