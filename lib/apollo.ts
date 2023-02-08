// /lib/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client'
import serviceCtgVar from '@/store/service'


const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getCtg: {
            read(){
              return serviceCtgVar;
            }
          }
        }
      }
    }
  }),
})

export default apolloClient

