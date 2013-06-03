require 'sinatra'
require 'ffakertime'

get '/' do
  redirect to '/ipsums'
end

get '/ipsums' do
  ipsums = Faker::IpsumTime.paragraphs

  haml :index, locals: { ipsums: ipsums }
end

get '/quotes' do
  ipsums = Faker::QuoteTime.paragraphs

  haml :index, locals: { ipsums: ipsums }
end
