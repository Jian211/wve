import { IExchangeRate } from '@/pages/api/exchangeRatesAPI';
import { gql, useQuery } from '@apollo/client';
import BoxAtom from '../atoms/BoxAtom'

const exChangeRateGql = gql`
  query {
    getExchangeRate {
      success
      result
      info {
        timestamp
        rate
      }
      date
      query {
        from
        to
        amount
      }
    }
  }
`;

export default function ExchangeRateBlock() {
  const {data : exchangeRate, loading, error} = useQuery<IExchangeRate>(exChangeRateGql);
  
  if(loading) return <h1>Loading</h1>
  if(error)   return <h1>Loading</h1>
  
  console.log(exchangeRate, loading)

  return (
    <BoxAtom boxType='small'>
      {exchangeRate && 
        <>
          {/* 왜 안뜨는지 이해가 안되네 */}
          <h1>{exchangeRate.success}왜 안ㄴ나와요??</h1>
        </>
      }
    </BoxAtom>
  )
}

