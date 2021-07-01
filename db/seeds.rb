# frozen_string_literal: true
Masjid.create(name: 'Maki Madni Masjid', email: 'makimadni@gmail.com', password: 'passowrd')
Expense.create(masjid_id: 1, amount: 100, reason: 'test')