import React from 'react'
import styled from 'styled-components';
import ImageAtom from '../atoms/ImageAtom';
import search from '../../public/images/search.png'


const SearchArea = styled.div`
    width: 33%;
    display: flex;
    justify-content: end;
    border: 1px solid red;
    padding: 6px;
    border-radius: 18px;
`;


const SearchBar = () => {
  return (
    <SearchArea>
        <ImageAtom 
            src={search}
            alt="search img"
            width={24}
        />
    </SearchArea>
  )
}

export default SearchBar