class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :department
      t.string :jobDescription
      t.string :responsibilities
      t.string :qualifications
      t.string :skills
      t.string :bonusSkills
      t.string :experience
      t.string :location
      t.string :jobType
      t.string :remote
      t.string :comments
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
