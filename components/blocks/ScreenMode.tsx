import React, { useState } from 'react'
import ImageAtom from '../atoms/ImageAtom'
import darkImg from '../../public/images/night-mode.png'
import brightImg from '../../public/images/brightness.png'

const ScreenMode = () => {
  const [mode, setMode] = useState(brightImg);
  const handleClick = () => setMode((curr) => {
    return curr.src === brightImg.src ? darkImg : brightImg;
  })
  
  return (
    <ImageAtom 
        src={mode}
        alt="internet img"
        width={24}
        onClick={handleClick}
    />
  )
}

export default ScreenMode