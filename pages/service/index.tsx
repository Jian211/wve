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




export default function Index() {
  const [ctg, setCtg] = useState("");

 

  return (
    <Wrapper>
      <Category
        currentCtg= {ctg}
        setCtg={setCtg}
      />
    </Wrapper>
  )
}


