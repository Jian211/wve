import type { AppProps } from 'next/app'

import apolloClient from '@/lib/apollo'
import { ApolloProvider } from '@apollo/client'

import styled,{ ThemeProvider } from 'styled-components'
import {theme} from '../styles/theme'
import {GlobalStyle} from '../styles/global-style'
import { Nav } from '@/components/templates/Nav'


const Wrapper = styled.div`
    width: 1300px;
    display : flex;
    margin: var(--margin-side);

    @media screen and ( max-width: 1360px){
      width: 720px;

      div:nth-child(2) {
        flex-direction: column;
        background-color: skyblue;
      }
    }
    @media screen and ( max-width: 1022px){
      width: 402px;
      flex-direction: column;
      div:nth-child(2) {
        background-color:blue;
      }
    }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
          <Nav />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
      </ApolloProvider>
    </ThemeProvider>
)}
