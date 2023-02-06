import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const Wrapper = styled(motion.section)`
    width: 50%;
    
    div{
        background-color: tomato;
    }
`;

interface ISliderProps {
    image: string
}

export const SliderBlock = ({image}:ISliderProps) => {
  return (
    <Wrapper
        initial={{x:0}}
        animate={{x:100}}
    >
        <div>
            {image}
        </div>
    </Wrapper>
  )
}
