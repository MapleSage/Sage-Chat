/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoById = /* GraphQL */ `
  query GetTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const getTodos = /* GraphQL */ `
  query GetTodos($orderBy: String!, $limit: Int!) {
    getTodos(orderBy: $orderBy, limit: $limit) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const getMessageById = /* GraphQL */ `
  query GetMessageById($id: ID!) {
    getMessageById(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const getMessages = /* GraphQL */ `
  query GetMessages {
    getMessages {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const getChatLambdaFunctionResponse = /* GraphQL */ `
  query GetChatLambdaFunctionResponse($text: String!) {
    getChatLambdaFunctionResponse(text: $text) {
      result
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        task
        description
        isComplete
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      text
      response
      createdAt
      updatedAt
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        response
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
