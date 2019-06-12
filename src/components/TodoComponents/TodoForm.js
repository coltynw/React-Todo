import React from 'react';

function TodoList() {
  return (
    <form>
      <input placeholder='Item to DO' value={this.state.list.item} />
    </form>
  )
}

export default TodoList;