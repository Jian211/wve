import { getExchangeRateAPI } from "@/pages/api/exchangeRatesAPI"
import { getWeatherInfo } from "@/pages/api/weatherAPI";

export const resolvers = {
  Query: {
    getExchangeRate: async () => {
      const result = await getExchangeRateAPI();
      return result;
    },

    getWeatherInfo: async (parent, args, contextValue, info) => {
      const { latitude, longitude } = args.coord;
      const weatherInfo = await getWeatherInfo({latitude,longitude});
      return weatherInfo
    }
    
  },
}
