/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Todo = {
  __typename: "Todo",
  id: string,
  task: string,
  description: string,
  isComplete: boolean,
  createdAt: string,
  updatedAt: string,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type ChatLambdaFunctionResponse = {
  __typename: "ChatLambdaFunctionResponse",
  result: string,
};

export type CreateTodoInput = {
  id?: string | null,
  task: string,
  description: string,
  isComplete: boolean,
};

export type ModelTodoConditionInput = {
  task?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  task?: string | null,
  description?: string | null,
  isComplete?: boolean | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateChatInput = {
  id?: string | null,
  text: string,
  response?: string | null,
};

export type ModelChatConditionInput = {
  text?: ModelStringInput | null,
  response?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  text: string,
  response?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChatInput = {
  id: string,
  text?: string | null,
  response?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  task?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  response?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  task?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  isComplete?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  response?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
};

export type AddTodoMutationVariables = {
  task: string,
  description: string,
  isComplete: boolean,
};

export type AddTodoMutation = {
  addTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type RestoreTodoMutationVariables = {
  id: string,
  task: string,
  description: string,
  isComplete: boolean,
};

export type RestoreTodoMutation = {
  restoreTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type RemoveTodoMutationVariables = {
  id: string,
};

export type RemoveTodoMutation = {
  removeTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenerateMessageMutationVariables = {
  content: string,
};

export type GenerateMessageMutation = {
  generateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type RestoreMessageMutationVariables = {
  id: string,
  content: string,
};

export type RestoreMessageMutation = {
  restoreMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type RemoveMessageMutationVariables = {
  id: string,
};

export type RemoveMessageMutation = {
  removeMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SendChatLambdaFunctionMutationVariables = {
  text: string,
};

export type SendChatLambdaFunctionMutation = {
  sendChatLambdaFunction?:  {
    __typename: "ChatLambdaFunctionResponse",
    result: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoByIdQueryVariables = {
  id: string,
};

export type GetTodoByIdQuery = {
  getTodoById?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodosQueryVariables = {
  orderBy: string,
  limit: number,
};

export type GetTodosQuery = {
  getTodos?:  Array< {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type GetMessageByIdQueryVariables = {
  id: string,
};

export type GetMessageByIdQuery = {
  getMessageById?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessagesQuery = {
  getMessages?:  Array< {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type GetChatLambdaFunctionResponseQueryVariables = {
  text: string,
};

export type GetChatLambdaFunctionResponseQuery = {
  getChatLambdaFunctionResponse?:  {
    __typename: "ChatLambdaFunctionResponse",
    result: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      task: string,
      description: string,
      isComplete: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      text: string,
      response?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    task: string,
    description: string,
    isComplete: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    text: string,
    response?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
