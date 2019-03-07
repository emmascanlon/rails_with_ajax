namespace :populate do
  desc "Populate Teams"
  task teams: :environment do
    numbers = *(1..99)
    10.times do 
      team = Team.create(name: Faker::Team.creature, 
      city: Faker::Nation.capital_city)
      5.times {Player.create(name: Faker::Name.name, 
        number: numbers.sample, team_id: team.id) }
      end
    end
  end
