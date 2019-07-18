import React from 'react';


function Todo(props) {
  return(
    <div>
      <h2 
      className={`list-item ${props.complete ? 'complete' : ''}`}
      onClick={() => props.changeComplete(props.id)} 
      >
       {props.name}
       </h2>
    </div>
  )
}

export default Todo;