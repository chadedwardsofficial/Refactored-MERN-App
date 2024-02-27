import { gql } from '@apollo/client';




export const SAVE_BOOK = gql `
  mutation SaveBook($book: BookInput!) {
  saveBook(book: $book) {
    _id
    email
    username
    bookCount
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}


`



export const CREATE_USER = gql`
 mutation createUser($username: String!, $password: String!, $email: String!) {
  createUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;







export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;



export const REMOVE_BOOK = gql `
mutation removeBook($book: BookInput!) {
  removeBook(book: $book) {
    _id
    email
    username
    bookCount
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}


`