# frozen_string_literal: true

# :Masjid model:
class Masjid < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  has_many :expenses, dependent: :destroy
end
