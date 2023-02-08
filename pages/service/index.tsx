import { Category } from '@/components/blocks/Category';
import { gql } from '@apollo/client';
import React, { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  border: 1px solid red;  
  display : flex;
  width: 100%;
`;


const test = gql`
  query{
    getCtg @client
  }
`;


export default function Index() {

  const [ctg, setCtg] = useState("");
  const sss = test;
  console.log(sss)
  return (
    <Wrapper>
      <Category
        currentCtg= {ctg}
        setCtg={setCtg}
      />
      
    </Wrapper>
  )
}
