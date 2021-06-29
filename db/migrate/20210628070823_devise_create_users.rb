# frozen_string_literal: true

# :Devise Migration:
class DeviseCreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false, default: ''
      t.string :email, null: false, default: ''
      t.string :encrypted_password, null: false, default: ''
      t.datetime :remember_created_at
      t.timestamps null: false
    end
  end
end
