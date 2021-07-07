# frozen_string_literal: true

module Api
  module V1
    # :Expense Controller:
    class ExpensesController < ApplicationController
      before_action :set_expense, only: :destroy

      def index
        @expenses = Expense.includes(:employee, :bill).order(created_at: :DESC)
        render json: @expenses
      end

      def new
        @expense = Expense.new(expense_params)
      end

      def create
        @expense = Expense.new(expense_params)
        @expense.masjid_id = 1
        if @expense.save
          render json: { success: true, data: @expense, message: 'Expense created successfully' }
        else
          render json: { success: false, data: {}, message: @expense.errors.full_messages.join(' ') }
        end
      end

      def destroy
        if @expense.destroy
          render json: { success: true, data: {}, message: 'Expense Deleted' }
        else
          render json: { success: false, data: @expense, message: @expense.errors.full_message.join('') }
        end
      rescue StandardError => e
        render json: { success: false, data: {}, message: e.message }
      end

      private

      def set_expense
        @expense = Expense.find_by_id(params[:id])
      end

      def expense_params
        params.require(:expense).permit(:masjid_id, :amount, :reason)
      end
    end
  end
end
