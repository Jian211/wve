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
      console.log(parent,"parent?")
      console.log(args,"args")
      console.log(contextValue,"contextValue")
      console.log(info,"info")
      return args
    }

  },
}
