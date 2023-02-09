import { Category } from '@/components/blocks/Category';
import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  border: 1px solid red;  
  display : flex;
  width: 100%;
`;


const test = gql`
  query{
    getBooks
  }
`;


export default function Index() {

  const [ctg, setCtg] = useState("");

  const result = useQuery(test);

  return (
    <Wrapper>
      <Category
        currentCtg= {ctg}
        setCtg={setCtg}
      />
      
    </Wrapper>
  )
}
