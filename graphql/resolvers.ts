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
  },
}
