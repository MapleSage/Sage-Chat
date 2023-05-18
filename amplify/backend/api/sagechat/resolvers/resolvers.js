const { Todo, Message } = require('../models');
const AWS = require('aws-sdk');
const { schema } = require('./validation');

const addTodoResolver = {
  Mutation: {
    addTodo: async (_, { task, description, isComplete }) => {
      try {
        await schema.validateAsync({
          task,
          description,
          isComplete,
        });

        const createdTodoItem = await Todo.create({
          task,
          description,
          isComplete,
        });

        return createdTodoItem;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

const getTodoByIdResolver = {
  Query: {
    getTodoById: async (_, { id }) => {
      try {
        const todoItem = await Todo.findByPk(id);
        return todoItem;
      } catch (error) {
        throw new Error('Failed to fetch the Todo item.');
      }
    },
  },
};

const getTodosResolver = {
  Query: {
    getTodos: async () => {
      try {
        const todos = await Todo.findAll();
        return todos;
      } catch (error) {
        throw new Error('Failed to fetch the Todo items.');
      }
    },
  },
};

const getMessageByIdResolver = {
  Query: {
    getMessageById: async (_, { id }) => {
      try {
        const messageItem = await Message.findByPk(id);
        return messageItem;
      } catch (error) {
        throw new Error('Failed to fetch the Message item.');
      }
    },
  },
};

const getMessagesResolver = {
  Query: {
    getMessages: async () => {
      try {
        const messages = await Message.findAll();
        return messages;
      } catch (error) {
        throw new Error('Failed to fetch the Message items.');
      }
    },
  },
};

const sendChatLambdaFunctionResolver = {
  Mutation: {
    sendChatLambdaFunction: async (_, { text }) => {
      try {
        const lambda = new AWS.Lambda();
        const params = {
          FunctionName: 'ChatLambdaFunction-Dev',
          Payload: JSON.stringify({ text }),
        };
        const result = await lambda.invoke(params).promise();
        return { result: result.Payload };
      } catch (error) {
        throw new Error('Failed to invoke the ChatLambdaFunction.');
      }
    },
  },
};

module.exports = {
  addTodoResolver,
  getTodoByIdResolver,
  getTodosResolver,
  getMessageByIdResolver,
  getMessagesResolver,
  sendChatLambdaFunctionResolver,
};


