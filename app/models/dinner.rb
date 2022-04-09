class Dinner < ApplicationRecord
  belongs_to :food

  validates :ingredients, :recipe, :difficulty, :cook_time, :servings, :image, presence: :true
end
