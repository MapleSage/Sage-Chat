// chat.resolvers.js
const chats = [
    {
      id: '1',
      text: 'Hello, how can I help you?',
      response: 'Hi, I have a question about my account balance.'
    },
    {
      id: '2',
      text: 'Sure, what is your question?',
      response: 'I am not able to see my latest transaction history.'
    }
  ];
  
  const getChatByIdResolver = {
    Query: {
      getChatById: (_, { id }) => chats.find(chat => chat.id === id)
    }
  };
  
  const getAllChatsResolver = {
    Query: {
      getAllChats: () => chats
    }
  };
  
  module.exports = {
    ...getChatByIdResolver,
    ...getAllChatsResolver
  };
  
  
  // message.resolvers.js
  const messages = [
    {
      id: '1',
      content: 'Hello, how are you doing?'
    },
    {
      id: '2',
      content: 'I am doing well, thanks for asking!'
    }
  ];
  
  const getMessageByIdResolver = {
    Query: {
      getMessageById: (_, { id }) => messages.find(message => message.id === id)
    }
  };
  
  const getAllMessagesResolver = {
    Query: {
      getAllMessages: () => messages
    }
  };
  
  module.exports = {
    ...getMessageByIdResolver,
    ...getAllMessagesResolver
  };
  