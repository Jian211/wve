import React from 'react'
import styled from 'styled-components';
import { BubbleAtom } from '../atoms/BubbleAtom';


const Wrapper = styled.ul`
  display: flex;
  height: fit-content;
  width: 100%;
  padding: 1em 0;
`;


const serviceCategory = [
    { 
      url:"",
      language: {
        kr: "전체", 
        ja: "すべて"  
      }
    },
    { 
      url:"daily",
      language: {
        kr: "일상",
        ja: "日常"  
      }
    },
    { 
      url:"travel",
      language: {
        kr: "여행", 
        ja: "旅行"  
      }
    },
    { 
      url:"food",
      language: {
        kr: "맛집", 
        ja: "グルメ"  
      }
    },
    { 
      url:"festival",
      language: {
        kr: "축제", 
        ja: "祭り"  
      }
    },
    { 
      url:"stay",
      language: {
        kr: "료칸", 
        ja: "旅館"  
      }
    },
]


export const Category = ({ currentCtg, setCtg }) => {

  return (
    <Wrapper>
      {serviceCategory.map((ctg, index) => (
        <BubbleAtom 
          key={index} 
          category={ctg}
          setCtg
        />
      ))}
  </Wrapper>
  )
}
