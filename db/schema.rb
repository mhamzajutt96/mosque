# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_28_073133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.string "reference_id", null: false
    t.integer "bill_type", default: 0
    t.bigint "expense_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expense_id"], name: "index_bills_on_expense_id"
  end

  create_table "employee_expenses", force: :cascade do |t|
    t.bigint "employee_id"
    t.bigint "expense_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_employee_expenses_on_employee_id"
    t.index ["expense_id"], name: "index_employee_expenses_on_expense_id"
  end

  create_table "employees", force: :cascade do |t|
    t.string "name", null: false
    t.string "national_identity_card_number", null: false
    t.string "phone_number", null: false
    t.bigint "masjid_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["masjid_id"], name: "index_employees_on_masjid_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.integer "amount", null: false
    t.string "reason", null: false
    t.bigint "masjid_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["masjid_id"], name: "index_expenses_on_masjid_id"
  end

  create_table "masjids", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_masjids_on_email", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bills", "expenses"
  add_foreign_key "employee_expenses", "employees"
  add_foreign_key "employee_expenses", "expenses"
  add_foreign_key "employees", "masjids"
  add_foreign_key "expenses", "masjids"
end
