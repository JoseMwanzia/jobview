class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.references :company, null: false, foreign_key: true
      t.references :job_seeker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
