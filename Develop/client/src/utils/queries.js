import { gql } from '@apollo/client';


export const GET_USER = gql`
  query User {
    user {
      _id
      email
      username
      bookCount
      saveBooks {
        authors
        bookId
        description
        title
        image
        link
      }
    }
  };`