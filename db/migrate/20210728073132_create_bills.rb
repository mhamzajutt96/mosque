# frozen_string_literal: true

# :Bill Migration:
class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills do |t|
      t.string :reference_id, null: false
      t.integer :bill_type, default: 0
      t.references :expense, foreign_key: true
      t.timestamps
    end
  end
end
