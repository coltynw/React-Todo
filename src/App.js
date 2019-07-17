import React, {useState} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       tasks: []
//     };
//   }
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
// render() {
//   return (
//     <div>
//       <h2>Welcome to your Todo App!</h2>
//       < Todo />
//     </div>
//   );
// }
// }
function App() {
  const [task, setTask] = useState([]);
  
  const addTask = todoName => {
    const newTask = {
      name: todoName,
      id: Date.now(),
      copmlete: false
    }
    setTask([...task, newTask]);
  }

  return(
    <div>
      <TodoList task={task} />
      <h2>Todo List</h2>
      <TodoForm addTask={addTask}/>
    </div>
  )
}

export default App;
