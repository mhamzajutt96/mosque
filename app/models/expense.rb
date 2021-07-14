# frozen_string_literal: true

# :Expense Model:
class Expense < ApplicationRecord
  # Associations
  belongs_to :masjid
  has_one :employee_expense, dependent: :destroy
  has_one :employee, through: :employee_expense
  has_one :bill, dependent: :destroy
  # Validations
  validates_presence_of :amount, :reason
end
