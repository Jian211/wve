import type { AppProps } from 'next/app'

import apolloClient from '../apollo/index'
import { ApolloProvider } from '@apollo/client'

import styled,{ ThemeProvider } from 'styled-components'
import {theme} from '../styles/theme'
import {GlobalStyle} from '../styles/global-style'
import { Nav } from '@/components/templates/Nav'
import { TitleHeaderWrap } from '@/components/templates/TitleHeaderWrap'


const Wrapper = styled.div`
    width: 76%;
    display : flex;
    margin: var(--margin-side);
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
          <Nav />
          <TitleHeaderWrap />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
      </ApolloProvider>
    </ThemeProvider>
)}
