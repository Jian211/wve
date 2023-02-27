import { getExchangeRateAPI } from "@/pages/api/exchangeRatesAPI"
import { getWeatherInfo } from "@/pages/api/weatherAPI";

export const resolvers = {
  Query: {
    getExchangeRate: async () => {
      const result = await getExchangeRateAPI();
      return result;
    },

    getWeatherInfo: async (_parent, _args, ctx) => {
      const { latitude, longitude } = _args.coord;
      const weatherInfo = await getWeatherInfo({latitude,longitude});
      return weatherInfo
    },

    getPost : async (_parent, _args, ctx) => {
      // 노션참고. 컨텍스트

    }
    
  },
}
