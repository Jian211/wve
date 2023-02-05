import React from 'react'
import styled from 'styled-components';
import internet from '../../public/images/internet.png'
import avatar from '../../public/images/avatar.png'
import ScreenMode from '../blocks/ScreenMode';
import ImageAtom from '../atoms/ImageAtom';

const Wrapper = styled.div`
    display: flex;
    width: 33%;
    justify-content: flex-end;
`;

const UtilArea = () => {
  return (
    <Wrapper>
        <ImageAtom 
            src={avatar}
            alt="avatar img"
            width={24}
        />
        <ImageAtom 
            src={internet}
            alt="internet img"
            width={24}
        />
        <ScreenMode />
    </Wrapper>
  )
}

export default UtilArea