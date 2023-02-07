import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const Wrapper = styled(motion.section)`
    
`;

interface ISliderProps {
    children: React.ReactNode
}


const animate = {
    
}

export const SliderBlock = ({children}:ISliderProps) => {

    return (
        <Wrapper
            initial={{x:0}}
            animate={{x:100}}
            exit={{x:-100}}
        >
            {children}
        </Wrapper>
    )
}
