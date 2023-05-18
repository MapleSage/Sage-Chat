const { resolver } = require('graphql-sequelize');
const { Todo } = require('../models');

const getTodosResolver = {
  Query: {
    getTodos: async (_, args) => {
      const todos = await Todo.findAll({
        distinct: true,
        orderBy: args.orderBy,
        limit: args.limit,
        offset: args.offset,
      });

      return todos;
    },
  },
};

const validateOrder = (orderBy) => {
  if (!orderBy) {
    return new Error('The orderBy argument is required.');
  }

  if (orderBy === 'id') {
    return null;
  }

  return new Error('The orderBy argument must be "id".');
};

const validateLimit = (limit) => {
  if (!limit) {
    return null;
  }

  if (limit < 1) {
    return new Error('The limit argument must be greater than 0.');
  }

  return null;
};

const getTodosResolverWithValidation = {
  Query: {
    getTodos: async (_, args) => {
      const errors = validateOrder(args.orderBy) || validateLimit(args.limit);

      if (errors) {
        throw errors;
      }

      const todos = await Todo.findAll({
        distinct: true,
        orderBy: args.orderBy,
        limit: args.limit,
        offset: args.offset,
      });

      return todos;
    },
  },
};

module.exports = getTodosResolverWithValidation;


