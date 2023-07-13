const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Float
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    title: String
    author: String
    publicationDate: Int
    savedBooks: Professor
  }

  type Auth {
    Token: []
    user: 
    
  }
`;

