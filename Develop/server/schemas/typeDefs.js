const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): Auth
    saveBook(_id: ID!): User
    deleteBook(_id: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
