# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
i = 1

1.times do
  @user = User.create(
    email: "brandon1@email.com",
    password: 'password',
    fname: "Brandon",
    lname: "s",
    image: "https://unsplash.com/photos/IF9TK5Uy-KI"
  )
  i += 1

  20.times do
    Food.create(
      food_name: Faker::Food.dish,
      image: Faker::Avatar.image(slug: 'food', size: '400x400', format: 'png', set: 'set4'),
      user_id: @user.id
    )
  end
end

puts 'data seeded'