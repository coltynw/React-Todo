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
      complete: false
    }
    setTask([...task, newTask]);
  }

  const removeTask = () => {
    const removal = task.filter(element => element.complete === false);
    setTask(removal);
  }

  const changeComplete = (id) => {
    const change = task.map((element) => {
      if (element.id === id) {
        element.complete = !element.complete;
        return element;
      }else{
        return element;
      }
    })
    setTask(change);
   console.log(change);
  }

  return(
    <div className={`app-container`}>
      <h2 className={`title`}>Todo List</h2>
      <TodoList task={task} changeComplete={changeComplete} />
      <TodoForm addTask={addTask} removeTask={removeTask} change={changeComplete}/>
    </div>
  )
}

export default App;
