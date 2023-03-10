import Head from 'next/head'
import styled from 'styled-components';
import MyInfoWrap from '@/components/blocks/MyInfoWrap';
import WeatherBlock from '@/components/blocks/WeatherBlock';
import ExchangeRateBlock from '@/components/blocks/ExchangeRateBlock';
import BoxAtom from '@/components/atoms/BoxAtom';
import { PopularPostBlock } from '@/components/blocks/PopularPostBlock';


const Wrapper = styled.div`
  width: 100vw;
  height: 1000px;
  display: flex;


  & > section > div {

    @media screen and (max-width: 767px) {
      background-color: black;
    }

    background-color: pink;
    margin: 18px;
  }

  @media screen and (max-width: 1620px){
    background-color: yellowgreen;
    height: fit-content;
    flex-wrap: wrap;
  }
  
  @media screen and (max-width: 767px){
    background-color: yellowgreen;
    flex-wrap: wrap;
  }
`;

const WrapperOne = styled.section`
  flex: 1;
  @media screen and (max-width: 1600px) {
    flex: none;
  }
    /* margin-right: 40px; */
`;

const WrapperTwo = styled.section`
  width: initial;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: end;
`;

export default function Home() {


  return (
    <>
      <Head>
        <title>Jian</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Wrapper>
        <WrapperOne>
          <PopularPostBlock />
          <MyInfoWrap />
        </WrapperOne>

        <WrapperTwo>
          <WeatherBlock />
          <BoxAtom boxType='middle' ><h1>박스</h1></BoxAtom>
          <WeatherBlock />
          <WeatherBlock />
          <WeatherBlock />
          {/* <ExchangeRateBlock /> */}
        </WrapperTwo>
      </Wrapper>
      
    </>
  )
}
