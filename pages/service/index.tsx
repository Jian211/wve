import { Category } from '@/components/blocks/Category';
import { gql, useQuery } from '@apollo/client';
import apolloClient from '../../apollo/index'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Wrapper = styled.section`
  border: 1px solid red;  
  display : flex;
  width: 100%;
`;


const test = gql`
  query{
    getExchangeRate {
      result
    }
  }
`;


export default function Index() {
  const [ctg, setCtg] = useState("");

  const {data,loading,error } = useQuery(test);
  console.log("됩니까?",data)
 

  return (
    <Wrapper>
      <Category
        currentCtg= {ctg}
        setCtg={setCtg}
      />
    </Wrapper>
  )
}


