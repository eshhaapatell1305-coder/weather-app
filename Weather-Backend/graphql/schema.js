const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Weather {
    id: Int
    city: String
    temperature: Float
    condition: String
    humidity: Int
    wind: Float
    pressure: Int
  }

  type Query {
    weather: [Weather]
  }
`);