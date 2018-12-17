10.times do
  Note.create(
    title: Faker::Dune.saying,
    description: Faker::Lorem.paragraph,
    complete: Faker::Boolean.boolean
  )
end

puts 'seeded'