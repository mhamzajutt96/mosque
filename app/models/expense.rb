# frozen_string_literal: true

# :Expense Model:
class Expense < ApplicationRecord
  enum expense_type: { bill: 0, person: 1, other: 2 }
end
