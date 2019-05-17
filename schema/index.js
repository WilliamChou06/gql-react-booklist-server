const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {

      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: { id: GraphQLID },
      resolve(parent, args){

      }
    },
    author: {
      type: AuthorType,
      args: { id: GraphQLID },
      resolve(parent, args){

      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})