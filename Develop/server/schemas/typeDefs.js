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
    Token: ID
    user: User
    
  }

  input saveBooks {
    authors: [Authors]
    bookId: String
    description: String
    title: String
    image: String
    link: String
}

type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(criteria: saveBooks): User
    deleteBook(bookId: String): Auth
}
`;

