class AddToApplications < ActiveRecord::Migration[7.0]
  def change
    add_column :applications, :name, :string
    add_column :applications, :email, :string
    add_column :applications, :address, :string
    add_column :applications, :phone, :string
  end
end
