const { resolver } = require('graphql-sequelize');
const { Todo } = require('../models');

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

module.exports = getTodoByIdResolver;


