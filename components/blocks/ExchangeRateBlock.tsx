import { IExchangeRate } from '@/pages/api/exchangeRatesAPI';
import { useEffect, useState } from 'react';
import BoxAtom from '../atoms/BoxAtom'


// 이 컴포넌트는 SSG, ISR을 활용하면 좋을 것 같다.
// 목적: 환율정보만 표시한다. 
// 만약, 유저에게 입력 값을 받아 처리를 한다면
//  CSR or SSR로 변환하는 편이 좋다.
// 빌드시에 SSG는 파일이 생성되므로, 현재는 CSR로 활용하겠따.
export default function ExchangeRateBlock() {

  const [exchangeRate,setExchangeRate] = useState<IExchangeRate>();

  const getLocalStorageData = () => {
      // 추가해야하는 기능 만약 날짜가 다를 시, api 호출해야함
      const cookey = localStorage.getItem("exchangeRate");
    return cookey ? JSON.parse(cookey) : null;
  }

  useEffect(()=> {
    // 무료API 이기 때문에 한달에 제한횟수가 정해져 있으므로 일단은 브라우저에 쿠키로 저장
    const exchangeRateData = getLocalStorageData();

    if(exchangeRateData)  setExchangeRate(exchangeRateData);
    
    if(!exchangeRateData){
      (async function (){
        const data = await getExchangeRate();
        setExchangeRate(data);
        localStorage.setItem("exchangeRate", JSON.stringify(data));
      })();
    }
  },[])

  return (
    <BoxAtom boxType='small'>
      {!exchangeRate ? <h1>Loading...</h1>        
        :<>
          <h1>한국에서 일본으로 환전</h1>
          <h1>1000원</h1>
          <h1>{exchangeRate?.date}</h1>
          <h1>{exchangeRate?.result}</h1>
        </>
      }
    </BoxAtom>
  )
}

