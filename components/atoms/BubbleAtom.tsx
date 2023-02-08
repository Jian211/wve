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
    category: {
        url: string,
        language: {
          [key : string]: string
        }
    }
}

export const BubbleAtom = ({category}: IBubbleAtom) => {

    // 현재의 url의 상태에 따라서 색이 변한다.!!! 이거다

    return (
      <Wrapper
        // style={{category.url === route}}
        onClick={()=>{console.log("hello", category.url)}}
      >
        {category.language["kr"]}
      </Wrapper>
  )
}
