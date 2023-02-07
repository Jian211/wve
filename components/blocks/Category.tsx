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
    { kr: "전체", ja: "すべて"  },
    { kr: "일상", ja: "日常"    },
    { kr: "여행", ja: "旅行"    },
    { kr: "맛집", ja: "グルメ"  },
    { kr: "축제", ja: "祭り"    },
    { kr: "료칸", ja: "旅館"    },
  ]
export const Category = () => {
  return (
    <Wrapper>
    {serviceCategory.map((category, index) => (
        <BubbleAtom 
            key={index}
            category={category}
        />
    ))}
  </Wrapper>
  )
}
