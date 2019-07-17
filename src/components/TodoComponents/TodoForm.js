import React, {useState} from 'react';

function TodoForm(props) {
  const [formValue, setFormValue] = useState('');
  
  const sendTask = (e) => {
    e.preventDefault();
    props.addTask(formValue);
    setFormValue('');
  }

  return (
    <form onSubmit={sendTask}>
      <input placeholder='Item to DO' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
    </form>
  )
}

export default TodoForm;