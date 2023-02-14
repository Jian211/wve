import React, {  useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageAtom from '../atoms/ImageAtom';
import cloud from '../../public/images/weathers/cloud.png'
import { coord, getWeatherInfo, IWeatherObj } from '@/pages/api/weatherAPI';
import BoxAtom from '../atoms/BoxAtom';
import { useQuery,gql } from '@apollo/client';

const Wrapper = styled.div`
    position: relative;

    img{
      position: absolute;
      top: -20px; 
    }
`;

const tokyoCoord = {
  latitude: 35.652832,
  longitude: 139.839478 
}

const weatherQuery = gql`
  query getWeatherInfo($latitude: String!, $longitude: String!) {
    getWeatherInfo(latitude: $latitude, longitude: $longitude) {
      base
    }
  }  
`

export default function WeatherBlock () {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherObj>();
  const [location, setLocation] = useState<coord>();
  const {data} = useQuery(weatherQuery,{
    variables: {
      latitude : tokyoCoord.latitude,
      longitude: tokyoCoord.longitude
    }
  })

  console.log(location,"로케이션정보.")
  console.log(data,"???")
  


  useEffect(() => {
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((pos) => {
          setLocation(pos.coords)
        })
      } else {
        setLocation(tokyoCoord)
      }
  },[])

  useEffect(() => {
    if(location){
      (async function (){
        setWeatherInfo(await getWeatherInfo(location))
      })()
    }
  },[location])

  return (
    <BoxAtom boxType='small' >
      <Wrapper> 
        {!weatherInfo ? 
          <>
            <h2>로딩중,,,</h2>
          </> : 
          <>
            <ImageAtom
              alt='cloud'
              src={cloud}
            />
            <h2>{weatherInfo.weather[0].main}</h2>
            <h2>{weatherInfo.main.temp}</h2>
            <h2>{weatherInfo.name}</h2>
          </>
        }
      </Wrapper>
    </BoxAtom>
  )
}
