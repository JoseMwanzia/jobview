class CreateJobSeekers < ActiveRecord::Migration[7.0]
  def change
    create_table :job_seekers do |t|
      t.string :first_name, null: false
      t.string :sur_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :image

      t.timestamps
    end
  end
end
