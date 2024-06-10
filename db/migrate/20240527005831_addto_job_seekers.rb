class AddtoJobSeekers < ActiveRecord::Migration[7.0]
  def change
    add_column :job_seekers, :password_digest, :string, null: false
  end
end
