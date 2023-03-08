import { Category } from '@/components/templates/Category';
import { PostContainer } from '@/components/templates/PostContainer';
import React  from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  
`;

export default function Index() {
  return (
    <Wrapper>
      <Category />
      <PostContainer />
    </Wrapper>
  )
}


