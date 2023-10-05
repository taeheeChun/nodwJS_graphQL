// @ts-check
const { ApolloServer, gql } = require("apollo-server")

// 데이터 구조 정의
// Book 객체의 속성을 정의
// 반환 타입을 설정. Book 객체의 배열을 반환.
const typeDefs = gql`
  #graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`
// 데이터 셋 설정
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]

// 리졸버
// 특정 타입과 관련된 데이터를 가져오는 방법을 정의
const resolvers = {
  Query: {
    books: () => books,
  },
}

// apollo server 설정.
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// @ts-ignore
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
