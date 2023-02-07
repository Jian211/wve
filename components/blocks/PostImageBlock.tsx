import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import arrow from '../../public/images/arrow.png'
import { SliderBlock } from './SliderBlock';


const Wrapper = styled.article`
    min-height: 76%;
    width: 100%;
    background-color: yellow;
    display: flex;

    section:first-child{
        position: absolute;
    }
    
    section:last-child{
        width: inherit;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;


        div:nth-child(2){
            width: inherit;
            display: flex;
            padding: 0 0.6em;
            justify-content: space-between;
        }

        div > img:first-child{
            transform: rotate(180deg);
        }

    }
`;



const PostImageBlock = () => {
    
    // props
    // => 사진[]
  
    return (
        <Wrapper>
            <SliderBlock >
                <h1>안녕하세요</h1>
            </SliderBlock>

            <section>
                <div>1/5</div>
                <div>
                    <Image src={arrow} alt="arrow" width={50} />
                    <Image src={arrow} alt="arrow" width={50} />
                </div>
                <div>. . .</div>
            </section>
        </Wrapper>                
    )
}

export default PostImageBlock