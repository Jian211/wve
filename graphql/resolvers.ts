import { getExchangeRateAPI } from "@/pages/api/exchangeRatesAPI"
import { getWeatherInfo } from "@/pages/api/weatherAPI";

export const resolvers = {
  Query: {
    getBooks : () => {
      return [
        { name: "성공", title:"??"},
      ]
    },
    
    getExchangeRate: async () => {
      const result = await getExchangeRateAPI();
      return result;
    },

    getWeatherInfo: async (parent, args, contextValue, info) => {
      console.log(args)
      const { latitude, longitude } = args.coord;
      const weatherInfo = await getWeatherInfo({latitude,longitude});
      return weatherInfo
    }
    
  },
}
