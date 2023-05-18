import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerChatLambdaFunctionResponse = {
  readonly result: string;
}

type LazyChatLambdaFunctionResponse = {
  readonly result: string;
}

export declare type ChatLambdaFunctionResponse = LazyLoading extends LazyLoadingDisabled ? EagerChatLambdaFunctionResponse : LazyChatLambdaFunctionResponse

export declare const ChatLambdaFunctionResponse: (new (init: ModelInit<ChatLambdaFunctionResponse>) => ChatLambdaFunctionResponse)

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly task: string;
  readonly description: string;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly task: string;
  readonly description: string;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly response?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly response?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chat = LazyLoading extends LazyLoadingDisabled ? EagerChat : LazyChat

export declare const Chat: (new (init: ModelInit<Chat>) => Chat) & {
  copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}