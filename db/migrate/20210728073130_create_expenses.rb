# frozen_string_literal: true

# :Expenses Migration:
class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.integer :amount, null: false
      t.string :reason, null: false
      t.references :masjid, foreign_key: true
      t.timestamps
    end
  end
end
