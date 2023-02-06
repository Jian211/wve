import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import BoxAtom from '../atoms/BoxAtom'
import { PostHeaderBlock } from './PostHeaderBlock';
import PostImageBlock from './PostImageBlock';

const Wrapper = styled.section`
    padding: 1em 2em;
    border: 1px solid red;
    height: 100%;
`;

export const PopularPostBlock = () => {
  return (
    <BoxAtom boxType='big'>
        <Wrapper>
            <PostHeaderBlock 
                nickname='jian'
                profile='image'
            />

            <PostImageBlock />
            <hr/>
            <div>
                <span>좋아요/수</span>
                <span>댓글/수</span>
                <span>링크전달</span>
                <span>스크랩</span>
            </div>
            <div>내용</div>
            <div>몇시간전</div>

        </Wrapper>
    </BoxAtom>
  )
}
