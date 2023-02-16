import React, {  useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageAtom from '../atoms/ImageAtom';
import cloud from '../../public/images/weathers/cloud.png'
import { Coord,IWeatherObj } from '@/pages/api/weatherAPI';
import BoxAtom from '../atoms/BoxAtom';
import { gql, useLazyQuery } from '@apollo/client';


const Wrapper = styled.div`
    position: relative;

    img{
      position: absolute;
      top: -20px; 
    }
`;

const tokyoCoord:Coord = {
  latitude: 35.652832,
  longitude: 139.839478 
}

const weatherQuery = gql`
  query WeatherData($coord: ICoord) {
    getWeatherInfo(coord: $coord) {
      weather {
        id
        main
        description
        icon
      }
      base
      main {
        temp
        feels_like
        temp_min
        temp_max
        pressure
        humidity
      }
      visibility
      wind {
        speed
        deg
      }
      dt
      clouds {
        all
      }
      sys {
        type
        id
        country
        sunrise
        sunset
      }
      timezone
      id
      name
      cod
    }
  }  
`

export default function WeatherBlock () {
  const [location, setLocation] = useState<Coord>();
  const [getCoord,{ data: weather, loading, error}] = useLazyQuery<IWeatherObj>(weatherQuery);
  console.log("렌더링 확인", weather,"가 있습니까")

  /**　ユーザーのロケーションの情報取得  
   * 基本は東京
  */
 useEffect(() => {
   if('geolocation' in navigator){
     navigator.geolocation.getCurrentPosition((pos) => {
       setLocation(pos.coords)
      })
    }else {
      setLocation(tokyoCoord)
    }
  },[])
  
  /** 設定されたロケーションを通じて天気情報取得 
  */
  useEffect(()=>{
    if(location){
      getCoord({
        variables: {
          coord : {
            latitude : location.latitude,
            longitude : location.longitude
          }
        }
      })
    }
  },[getCoord,location])
  
  return (
    <BoxAtom boxType='small' >
      {weather?.base}
      {/* <Wrapper> 
        { !weather ? <>loading</> :
        <>
          <ImageAtom alt='cloud' src={cloud} />
          <h2>{weather.base}았는겨 업는겨?</h2>
        </>
        }
      </Wrapper> */}
    </BoxAtom>
  )
}
