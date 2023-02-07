import { Category } from '@/components/blocks/Category';
import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  border: 1px solid red;  
  display : flex;
  width: 100%;
`;




export default function index() {

  return (
    <Wrapper>
      <Category />
    </Wrapper>
  )
}
