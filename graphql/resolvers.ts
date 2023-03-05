import { getExchangeRateAPI } from "@/pages/api/exchangeRatesAPI"
import { getWeatherInfo } from "@/pages/api/weatherAPI";

export const resolvers = {
  Query: {
    getExchangeRate: async (_parent, _args, ctx) => {
      const result = await getExchangeRateAPI();
      // console.log( "ctx", ctx)
      console.log("이것 때뮨ㅇ?")
      return result;
    },

    getWeatherInfo: async (_parent, _args, ctx) => {
      const { latitude, longitude } = _args.coord;
      const weatherInfo = await getWeatherInfo({latitude,longitude});
      return weatherInfo
    },

    getPost : async (_parent, _args, context) => {
      // 노션참고. 컨텍스트
      console.log("context 겟 포스트")
    }
    
  },
}
