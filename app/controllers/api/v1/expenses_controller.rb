# frozen_string_literal: true

module Api
  module V1
    # :Expense Controller:
    class ExpensesController < ApplicationController
      before_action :set_expense, only: %i[edit update destroy]

      def index
        @expenses = Expense.includes(:employee, :bill).order(created_at: :DESC)
        respond_to do |format|
          format.html {}
          format.json { render json: { success: true, data: @expenses } }
        end
      end

      def new
        @expense = Expense.new
      end

      def create
        @expense = Expense.new(expense_params)
        @expense.masjid_id = 1
        respond_to do |format|
          if @expense.save
            format.html { redirect_to api_v1_expenses_path, notice: 'Expense created successfully.' }
            format.json { render json: { success: true, data: @expense, message: 'Expense created successfully.' } }
          else
            format.html { render 'api/v1/expenses/new' }
            format.json { render json: { success: false, data: {}, message: @expense.errors.full_messages.join(' ') } }
          end
        end
      end

      def edit; end

      def update
        respond_to do |format|
          if @expense.update(expense_params)
            format.html { redirect_to api_v1_expenses_path, notice: 'Expense updated successfully.' }
            format.json { render json: { success: true, data: @expense, message: 'Expense updated successfully.' } }
          else
            format.html { render 'api/v1/expenses/edit' }
            format.json { render json: { success: false, data: {}, message: @expense.errors.full_messages.join(' ') } }
          end
        end
      end

      def destroy
        respond_to do |format|
          if @expense.destroy
            format.html { redirect_to api_v1_expenses_path, notice: 'Expense deleted successfully.' }
            format.json { render json: { success: true, data: {}, message: 'Expense Deleted' } }
          else
            format.html { redirect_to @expense, alert: @expense.errors.full_message.join('') }
            format.json { render json: { success: false, data: @expense, message: @expense.errors.full_message.join('') } }
          end
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
