import { gql } from "apollo-server-micro";


export const typeDefs = gql`
    type Book {
        name: String,
        title: String
    }

    type Query {
        books: [Book]
    }
`;

