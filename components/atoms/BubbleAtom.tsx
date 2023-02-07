import React, { useState } from 'react'
import styled from 'styled-components';


const Wrapper = styled.li`
  width: 4.8em;
  height: 3em;
  border-radius: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5em;
  background-color: #e6e6e6;

  &:hover {
    background-color: black;
    color: white;
  }

`;

interface IBubbleAtom {
    index: number,
    category: {
        [key: string]:string
    }
}

export const BubbleAtom = ({index, category}: IBubbleAtom) => {
    const [selected, setSelected] = useState(0);
    
    console.log(selected)
  
    return (
    <Wrapper 
        key={index}
        
    >
        {category["kr"]}
    </Wrapper>
  )
}
