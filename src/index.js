import { API } from 'aws-amplify'
import { createTodo } from './graphql/mutations'

async function createNewTodo() {
  const todoDetails = {
    name: 'Example Todo',
    description: 'This is an example todo item',
    completed: false
  }

  const newTodo = await API.graphql({
    query: createTodo,
    variables: { input: todoDetails }
  })

  console.log('Created new todo:', newTodo.data.createTodo)
}
