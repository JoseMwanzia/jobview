class AddFieldsToCompanies < ActiveRecord::Migration[7.0]
  def change
    add_column :companies, :description, :string
    add_column :companies, :image_url, :string
    add_column :companies, :job_title, :string
    add_column :companies, :job_description, :text
  end
end
