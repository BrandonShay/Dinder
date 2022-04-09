class Food < ApplicationRecord
  belongs_to :user
  has_many :dinners

  validates :food_name, :food_type, :image, presence: :true
end
