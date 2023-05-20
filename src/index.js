import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

// You can import your queries and mutations as needed
import { listTodos } from './graphql/queries'
import { createTodo } from './graphql/mutations'

async function fetchTodos() {
  try {
    const todoData = await API.graphql(graphqlOperation(listTodos))
    const todos = todoData.data.listTodos.items
    console.log('Todo list', todos)
  } catch (err) { console.log('error fetching todos', err) }
}

async function addNewTodo() {
  const todoDetails = {
    task: 'Example Todo',
    description: 'This is an example todo item',
    isComplete: false
  }
  try {
    await API.graphql(graphqlOperation(createTodo, { input: todoDetails }))
    console.log('Todo successfully created!')
  } catch (err) { console.log('error creating todo:', err) }
}

fetchTodos()
addNewTodo()
