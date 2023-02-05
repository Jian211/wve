import React, {  useEffect, useState } from 'react'
import styled from 'styled-components'
import { getBoxStyle } from '@/styles/boxes/box';
import ImageAtom from '../atoms/ImageAtom';
import cloud from '../../public/images/weathers/cloud.png'
import { coord, getWeatherInfo, IWeatherObj } from '@/pages/api/weatherAPI';

const Wrapper = styled.div`
    background-color: pink;
    border-radius: var(--box-border-radius);
    box-shadow: var(--box-shadow);
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


// 유저의 지역 날씨 정보를 캐싱해두는게 좋을 듯하다.
//  => 브라우저 저장소에 저장해두기


export default function WeatherBlock () {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherObj>();
  const [location, setLocation] = useState<coord>();

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
    <Wrapper style={getBoxStyle('small')}> 
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
      </>}
    </Wrapper>
  )
}
