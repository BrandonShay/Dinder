class CreateDinners < ActiveRecord::Migration[7.0]
  def change
    create_table :dinners do |t|
      t.text :ingredients
      t.text :recipe
      t.string :difficulty
      t.string :cook_time
      t.string :image
      t.string :servings
      t.belongs_to :food, null: false, foreign_key: true

      t.timestamps
    end
  end
end
