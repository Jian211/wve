import { gql } from "apollo-server-micro";



export const typeDefs = gql`

  type Book {
      name: String
      title: String
  }
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

  
  type Query {
    getExchangeRate: ExchangeRate
    getBooks: [Book]
    #  getWeatherInfo: WeatherInfo
  }
`;
  
  