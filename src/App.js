import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
// example items.
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  addTodo = e => {
    // setting id to date.now.
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    // remember to setState
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });
// updating the state.


  toggle = id => {

    // splicing to add item to existing array.
    let todos = this.state.todos.slice();
    // and then mapping it
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo
      } else {
        return todo;
      }
    });
    // remember to setState
    this.setState({ todos });
  };

  clear = e => {
    // filter to remove completed items and return new array.
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    // remember to setState
    this.setState({ todos });
  };

  render() {
    // render function that prints the page elements.
    return (
      <div>

        <h2>Welcome to your Todo App!</h2>

        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clear}
        />

        <br></br>

        <TodoList
          handleToggleComplete={this.toggle}
          todos={this.state.todos}
        />
        
      </div>
    );
  }
}

export default App;