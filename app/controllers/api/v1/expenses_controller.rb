# frozen_string_literal: true

module Api
  module V1
    # :Expense Controller:
    class ExpensesController < ApplicationController
      def index
        @expenses = Expense.all
        respond_to do |format|
          format.html { @expenses }
          format.json { render json: @expenses.as_json }
        end
      end

      def new
        @expense = Expense.new(expense_params)
      end

      def create
        @expense = Expense.new(expense_params)
        respond_to do |format|
          if @expense.save
            format.html { redirect_to @expense, notice: 'Expense created successfully' }
          else
            format.html { redirect_to expenses_path, alert: @expense.errors.full_messages.join(' ') }
          end
          format.js
        end
      end

      private

      def expense_params
        params.require(:expense).permit(:reference_id, :expense_type)
      end
    end
  end
end
