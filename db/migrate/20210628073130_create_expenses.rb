# frozen_string_literal: true

# :Expenses Migration:
class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :reference_id
      t.integer :expense_type, default: 0
      t.timestamps
    end
  end
end
