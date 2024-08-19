const { gql } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../../schema');
const resolvers = require('../../resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const { query } = createTestClient(server);

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

test('fetches hello message', async () => {
  const { data } = await query({ query: HELLO_QUERY });
  expect(data.hello).toBe('Hello world!');
});