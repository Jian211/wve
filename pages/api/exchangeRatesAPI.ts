const myHeaders = new Headers();
myHeaders.append("apikey", "rACaeNaREwm4W8CMKFtaFqtE20ebtWtI");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export interface IExchangeRate {
    success: boolean,
    query: {
        from: string,
        to: string,
        amount: number
    },
    info: {
        timestamp: number,
        rate: number
    },
    date: string,
    result: number
}

export const getExchangeRateAPI = async ():Promise<IExchangeRate> => {
    const data:Promise<IExchangeRate> = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=JPY&from=KRW&amount=1000", requestOptions)
            .then(response => response.json());
    return data;
}
  