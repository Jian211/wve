import styled from 'styled-components'
import LogoArea from '../blocks/LogoArea';
import SearchBar from '../blocks/SearchBar';
import UtilArea from '../blocks/UtilArea';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin: var(--margin-side);
`;

export const Nav = () => {
  return (
    <Wrapper>
        <LogoArea />
        <SearchBar />
        <UtilArea />
    </Wrapper>
    )
}
