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

  ####### WeatherAPI Schema #######
    
  input ICoord {
    latitude: Float,
    longitude: Float
  }

  type Weather {
    id: Int
    main: String
    description: String
    icon: String
  }
  
  type Main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
  }

  type Wind {
    speed: Float
    deg: Int 
  }

  type Clouds {
    all : Int
  }

  type Sys {
    type: Int
    id: Int
    country: String
    sunrise: Int
    sunset: Int
  }

  type WeatherInfo {
    weather: [Weather] 
    base: String
    main: Main
    visibility: Int
    wind: Wind
    clouds: Clouds
    dt: Int
    sys: Sys
    timezone: Int
    id: Int
    name: String
    cod: Int
  }

  ### post ###
  type Post {
    postId  Int
  }

  type Query {
    getExchangeRate: ExchangeRate
    getBooks: [Book]
    getWeatherInfo(coord: ICoord ): WeatherInfo
    getPost
  }

`;
  
  