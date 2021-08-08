const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    post: [Post]!
  }

  type Park {
    _id: ID
    fullName: String
    parkCode: String
    state: String
    post: [Post]!
  }

  type Post {
    _id: ID
    postTxt: String
    postAuthor: String
    created: String
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentTxt: String
    commentAuthor: String
    createdAt: Date
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query{
    users: [User]
    user(email: String!): User
    post(email: String): [Post]
    Post(postId: ID!): Post
    me: User
  }

  type Mutation{
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postTxt: String!): Post
    addComment(postId:ID!, commentTxt: String!): Post
    removePost(postId) ID!
: Post
    removeComment(postId: ID!, commentId: ID!): Post  }
`

module.exports = typeDefs;
