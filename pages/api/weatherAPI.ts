
export type coord = {
    latitude: number
    longitude: number,
}

export interface IWeatherObj {
    base: string,
    clouds: {
      all : number 
    },
    cod: number,
    coord: coord,
    dt:number,
    id:number,
    main:{
      temp: number,
      temp_min: number, 
      temp_max: number, 
      pressure: number,
      feels_like: number,
    },
    name: string,
    sys:{
        type: number, 
        id: number, 
        country: string, 
        sunrise: number, 
        sunset: number
    },
    timezone:number,
    visibility:number,
    weather:[{
        description : string,
        icon : string,
        id : number,
        main : string,
      }],
    wind:{
      speed: number, 
      deg: number
    }
}

export const getWeatherInfo = ({latitude, longitude}:coord):Promise<IWeatherObj> => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5a5e5dc879b0fbacdaf831fae3d75afa&units=metric`).then(res => res.json()) ;
}