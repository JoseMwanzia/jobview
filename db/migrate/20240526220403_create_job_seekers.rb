class CreateJobSeekers < ActiveRecord::Migration[7.0]
  def change
    create_table :job_seekers do |t|
      t.string :first_name
      t.string :sur_name
      t.string :last_name
      t.string :email
      t.string :image_url

      t.timestamps
    end
  end
end
