# frozen_string_literal: true

# :Employee Migration:
class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :name, null: false
      t.string :national_identity_card_number, null: false
      t.string :phone_number, null: false
      t.references :masjid, foreign_key: true
      t.timestamps
    end
  end
end
