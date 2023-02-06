import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import menu from '../../public/images/menu.png';

const Wrapper = styled.article`
    display: flex;
    height: 3em;
    justify-content: space-between;
    align-items: center;
    background-color: skyblue;
    
    div:first-child{
        flex:1;
    }
    
    img:first-child{
        flex:1;
    }
`;

interface IPostHeaderProps {
    profile: string,
    nickname: string
}

export const PostHeaderBlock = ({profile, nickname}: IPostHeaderProps) => {
  return (
    <Wrapper>
        <div>
            <span>{profile}</span>
            <span>{nickname}</span>
        </div>
        <Image src={menu} alt="menu" width={26} />
    </Wrapper>
  )
}
