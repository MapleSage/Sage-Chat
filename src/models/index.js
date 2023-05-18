// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Message, Chat, ChatLambdaFunctionResponse } = initSchema(schema);

export {
  Todo,
  Message,
  Chat,
  ChatLambdaFunctionResponse
};