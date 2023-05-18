const AWS = require('aws-sdk');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware');
const { graphqlHTTP } = require('express-graphql');
const { resolvers } = require('./chat.resolvers');
const { AmplifyAppSyncSimulator } = require('amplify-appsync-simulator');

const schemaText = `
  type Todo {
    id: ID!
    task: String!
    description: String!
    isComplete: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Message {
    id: ID!
    content: String!
  }

  type Chat {
    id: ID!
    text: String!
    response: String
  }

  type Query {
    getTodos: [Todo]
    getTodoById(id: ID!): Todo
    getMessages: [Message]
    getMessageById(id: ID!): Message
  }

  type Mutation {
    createTodo(
      task: String!
      description: String!
      isComplete: Boolean!
    ): Todo
    updateTodo(
      id: ID!
      task: String!
      description: String!
      isComplete: Boolean!
    ): Todo
    deleteTodo(id: ID!): Todo
    createMessage(content: String!): Message
    updateMessage(id: ID!, content: String!): Message
    deleteMessage(id: ID!): Message
  }
`;

const schema = makeExecutableSchema({
  typeDefs: schemaText,
  resolvers: resolvers,
});

const amplifyConfig = {
  apiId: 'authsagechat14cdaa9b',
  name: 'sagechat',
  authenticationType: 'da2-rskrtlm72rgjvic6cdpivphnnq',
  additionalAuthenticationProviders: [],
};

const simulator = new AmplifyAppSyncSimulator({
  port: 20002,
  appSync: {
    name: amplifyConfig.name,
    apiKey: amplifyConfig.authenticationType === 'API_KEY' ? 'da-fake-key' : undefined,
    defaultAuthenticationType: amplifyConfig.authenticationType,
    additionalAuthenticationProviders: amplifyConfig.additionalAuthenticationProviders,
  },
});

simulator.start().then(({ port }) => {
  const endpoint = `http://localhost:${port}`;

  const app = require('express')();

  const context = ({ req }) => {
    const authorization = req.headers.authorization || '';
    const username = authorization.split(' ')[1] || '';
    return {
      headers: {
        Authorization: authorization,
      },
      request: req,
      username,
    };
  };

  const middleware = applyMiddleware(schema, context);

  app.use('/graphql', graphqlHTTP({
    schema,
    context,
    graphiql: true,
  }));

  app.listen(3000, () => {
    console.log(`Server listening on port 3000, GraphQL endpoint available at ${endpoint}/graphql`);
  });
});

