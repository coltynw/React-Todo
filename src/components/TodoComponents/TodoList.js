import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  return(
    <div>
      {props.task.map(element => (
        <Todo 
          key = {element.id}
          name = {element.name}
        />
      ))}
    </div>
  )
}

export default TodoList;