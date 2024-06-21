class AddPostToApplications < ActiveRecord::Migration[7.0]
  def change
    add_reference :applications, :post, null: false, foreign_key: true
  end
end
