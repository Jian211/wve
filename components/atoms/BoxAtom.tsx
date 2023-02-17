import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius:20px;
  box-shadow: var(--box-shadow);
`;

const BoxSizeType = {
    big : {
        width: 625,
        height: 700
    },
    middle: {
        width: 296,
        height: 420
    },
    small: {
        width: 296,
        height: 192
    }
}

type BoxAtomProps = {
    boxType: "big"| "middle" | "small",
    children: React.ReactNode
}


const BoxAtom = (
    {boxType, children}: BoxAtomProps,
) => {
  return (
    <Wrapper
        style={{
            minWidth: BoxSizeType[boxType].width, 
            height: BoxSizeType[boxType].height,
        }}
    >
        {children}
    </Wrapper>
  )
}

export default BoxAtom