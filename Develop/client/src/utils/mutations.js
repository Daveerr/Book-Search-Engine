import { gql } from '@apollo/client';

//mutations.js:

//LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

//ADD_USER will execute the addUser mutation.

//SAVE_BOOK will execute the saveBook mutation.

//REMOVE_BOOK will execute the removeBook mutation.

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
}`;
    

