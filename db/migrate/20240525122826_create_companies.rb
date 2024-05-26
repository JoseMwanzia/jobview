class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
