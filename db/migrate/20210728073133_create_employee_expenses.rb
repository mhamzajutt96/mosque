# frozen_string_literal: true

# :Employee Expense Migration:
class CreateEmployeeExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :employee_expenses do |t|
      t.references :employee, foreign_key: true
      t.references :expense, foreign_key: true
      t.timestamps
    end
  end
end
