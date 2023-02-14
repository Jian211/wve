import { gql } from "apollo-server-micro";



export const typeDefs = gql`

  type Book {
      name: String
      title: String
  }

  # ExchangeRate Schema
  type Info {
    timestamp: Float
    rate: Float
  }

  type Query {
    from : String
    to: String
    amount: Int
  }

  type ExchangeRate {
    success: Boolean
    result: Float
    info: Info
    date: String
    query: Query
  }

  #WeatherAPI Schema
  type WeatherInfo {
    base: String
  }

  type Query {
    getExchangeRate: ExchangeRate
    getBooks: [Book]
    getWeatherInfo: WeatherInfo
  }
`;
  
  