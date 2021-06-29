# frozen_string_literal: true

# :User Model:
class User < ApplicationRecord
  devise :database_authenticatable, :rememberable, :validatable
end
