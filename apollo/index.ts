import { ApolloClient, gql, InMemoryCache } from '@apollo/client';


/**
 *  uri: graphql 서버의 url지정
 *  cache : apollo클라이언트가 쿼리 결과를 가져온 후 캐시하는데 사용되는 인스턴스
 */
const apolloClient = new ApolloClient({
    uri : 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
}) 


apolloClient
    .query({
        query: gql`
            query getBooks {
                name
                title
            }
        `,
    })
    .then(result => {
        console.log(result)
        return result;
    })
    
export default apolloClient