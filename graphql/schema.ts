import { gql } from "apollo-server-micro";



export const typeDefs = gql`

  type Book {
      name: String
      title: String
  }

  type ExchangeRate {
    
    result: Int
  }

  type WeatherInfo {
    base: String
    clouds: {
      all : Int 
    }
    cod: Int
    coord: coord
    dt:Int
    id:Int
    main:{
      temp: Int
      temp_min: Int 
      temp_max: Int 
      pressure: Int
      feels_like: Int
    }
    name: String
    sys:{
        type: Int 
        id: Int 
        country: String 
        sunrise: Int 
        sunset: Int
    }
    timezone:Int
    visibility:Int
    weather:[{
        description : String
        icon : String
        id : Int
        main : String
      }]
    wind:{
      speed: Int 
      deg: Int
    }
  }

  type Query {
    getExchangeRate: ExchangeRate
    getBooks: [Book]
    getWeatherInfo: WeatherInfo
  }
`;
  
