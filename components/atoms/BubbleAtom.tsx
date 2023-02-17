import styled from 'styled-components';


const Wrapper = styled.li<{selected: boolean}>`
  width: 4.8em;
  height: 3em;
  border-radius: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5em;
  
  
  background-color: ${props =>  (props.selected ? "black" : "#e6e6e6")};
  color : ${props =>  (props.selected ? "white" : "black")};

  &:hover {
    background-color: #b7b7b7;
    color: white;
  }
`;

interface BubbleAtomProps {
  children : React.ReactNode
  selected : boolean
}

export const BubbleAtom = ({children, selected }: BubbleAtomProps) => {

    // 현재의 url의 상태에 따라서 색이 변한다.!!! 이거다
    return (
      <Wrapper selected={selected}>
        {children}
      </Wrapper>
  )
}
