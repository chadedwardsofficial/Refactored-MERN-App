

const typeDefs = `#graphql
  
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input BookInput {
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
    bookCount: Int
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
    saveBook(book: BookInput!): User
    removeBook( bookId: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
