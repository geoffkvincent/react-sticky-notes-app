10.times do
  Note.create(
    name: Faker::Dune.saying,
    description: Faker::Lorem.paragraph,
    complete: Faker::Boolean.boolean
  )
end

puts 'seeded'