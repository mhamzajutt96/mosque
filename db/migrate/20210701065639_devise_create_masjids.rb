# frozen_string_literal: true

# :Masjid Migration:
class DeviseCreateMasjids < ActiveRecord::Migration[6.0]
  def change
    create_table :masjids do |t|
      t.string :name, null: false
      t.string :email, null: false, default: ''
      t.string :encrypted_password, null: false, default: ''
      t.datetime :remember_created_at
      t.timestamps null: false
    end
    add_index :masjids, :email, unique: true
  end
end
