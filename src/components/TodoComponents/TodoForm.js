import React, {useState} from 'react';

function TodoForm(props) {
  const [formValue, setFormValue] = useState('');
  
  const sendTask = (e) => {
    e.preventDefault();
    props.addTask(formValue);
    setFormValue('');
  }

  const removeEvent = (e) => {
    e.preventDefault();
    props.removeTask();
  }

  return (
    <form onSubmit={sendTask}>
      <input placeholder='Item to DO' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type='submit'>Add Todo</button>
      <button type='button' onClick={removeEvent}>Remove Todo</button>
    </form>
  )
}

export default TodoForm;