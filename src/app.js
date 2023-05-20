import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import awsconfig from './aws-exports'
import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from './graphql/queries'
import { createTodo } from './graphql/mutations'

Amplify.configure(awsconfig)

class App extends React.Component {
  // your state and methods here
  state = { todos: [] }

  async componentDidMount() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      this.setState({ todos })
    } catch (err) {
      console.log('error fetching todos', err)
    }
  }

  createTodo = async () => {
    const todo = {
      task: 'Example Todo',
      description: 'This is an example todo item',
      isComplete: false
    }
    try {
      await API.graphql(graphqlOperation(createTodo, { input: todo }))
      console.log('Todo successfully created!')
      this.componentDidMount()
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  render() {
    return (
      <div className="App">
        {/* list your todos here */}
        {this.state.todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.task}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
        {/* add your create todo button here */}
        <button onClick={this.createTodo}>Create Todo</button>
      </div>
    )
  }
}

export default withAuthenticator(App)
