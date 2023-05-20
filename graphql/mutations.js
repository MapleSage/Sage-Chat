/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTodo = /* GraphQL */ `
  mutation AddTodo(
    $task: String!
    $description: String!
    $isComplete: Boolean!
  ) {
    addTodo(task: $task, description: $description, isComplete: $isComplete) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const restoreTodo = /* GraphQL */ `
  mutation RestoreTodo(
    $id: ID!
    $task: String!
    $description: String!
    $isComplete: Boolean!
  ) {
    restoreTodo(
      id: $id
      task: $task
      description: $description
      isComplete: $isComplete
    ) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const removeTodo = /* GraphQL */ `
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const generateMessage = /* GraphQL */ `
  mutation GenerateMessage($content: String!) {
    generateMessage(content: $content) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const restoreMessage = /* GraphQL */ `
  mutation RestoreMessage($id: ID!, $content: String!) {
    restoreMessage(id: $id, content: $content) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const removeMessage = /* GraphQL */ `
  mutation RemoveMessage($id: ID!) {
    removeMessage(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const sendChatLambdaFunction = /* GraphQL */ `
  mutation SendChatLambdaFunction($text: String!) {
    sendChatLambdaFunction(text: $text) {
      result
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      task
      description
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
      id
      text
      response
      createdAt
      updatedAt
    }
  }
`;
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
      id
      text
      response
      createdAt
      updatedAt
    }
  }
`;
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
      id
      text
      response
      createdAt
      updatedAt
    }
  }
`;
