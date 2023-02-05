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

type BoxTypes = {
    boxType: "big"| "middle" | "small",
};

const BoxAtom = (
    {boxType}: BoxTypes,
) => {
  return (
    <Wrapper
        style={{
            minWidth: BoxSizeType[boxType].width, 
            height: BoxSizeType[boxType].height,
        }}
    >
    </Wrapper>
  )
}

export default BoxAtom