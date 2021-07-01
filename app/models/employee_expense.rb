# frozen_string_literal: true

# :Employee Expense Model:
class EmployeeExpense < ApplicationRecord
  belongs_to :employee
  belongs_to :expense
end
