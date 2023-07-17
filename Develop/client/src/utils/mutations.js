import { gql } from "@apollo/client";

//mutations.js:

//LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        saveBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

//SAVE_BOOK will execute the saveBook mutation.
export const SAVE_BOOK = gql`
  mutation saveBook($criteria: BookInput!) {
    saveBook(criteria: $criteria) {
      username
      email
      bookCount
      savedBooks {
        authors
        bookId
        description
        title
        image
        link
      }
    }
  }
`;

//REMOVE_BOOK will execute the removeBook mutation.
export const DELETE_BOOK = gql`
  mutation Mutation($bookId: String!) {
    deleteBook(bookId: $bookId) {
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
