const typeDefs = `

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

  type Query {
    user(id: ID, username: String): User

  }

  type Mutation { 
    createUser()
    saveBook(_id: ID!)
    deleteBook(_id: ID!)
    login()

  }




`;

module.exports = typeDefs;
