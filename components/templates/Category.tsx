import { useRouter } from 'next/router';
import React, { MouseEventHandler } from 'react'
import styled from 'styled-components';
import { BubbleAtom } from '../atoms/BubbleAtom';


const Wrapper = styled.ul`
  display: flex;
  height: fit-content;
  width: 100%;
  padding: 1em 0;
  
  li {
    cursor: pointer;
  }
`;


const serviceCategory = [
    { 
      category:"all",
      language: {
        kr: "전체", 
        ja: "すべて"  
      }
    },
    { 
      category:"daily",
      language: {
        kr: "일상",
        ja: "日常"  
      }
    },
    { 
      category:"travel",
      language: {
        kr: "여행", 
        ja: "旅行"  
      }
    },
    { 
      category:"food",
      language: {
        kr: "맛집", 
        ja: "グルメ"  
      }
    },
    { 
      category:"festival",
      language: {
        kr: "축제", 
        ja: "祭り"  
      }
    },
    { 
      category:"stay",
      language: {
        kr: "료칸", 
        ja: "旅館"  
      }
    },
]


export const Category = () => {

  const router = useRouter();
  const handleClick = (category:string) => () => {
    router.push({
      pathname: router.route,
      query: { category }
    })
  }

  return (
    <Wrapper>
      {serviceCategory.map((ctg, index) => (
        <BubbleAtom key={index} selected={ctg.category === router.query.category} >
          <h4 onClick={handleClick(ctg.category)}>
            {ctg.language.kr}
          </h4>
        </BubbleAtom> 
      ))}
  </Wrapper>
  )
}
