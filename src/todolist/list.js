// TodoList.js
import "./newlist.css";
import React from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo, toggleStatus }) => {
  return (
    <div className="container">
      {todos.map(todo => (
        <div className="small-container" key={todo.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{todo.taskName}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
          <button className="edit" onClick={() => updateTodo(todo.id, { ...todo, taskName: prompt('Enter new task name:', todo.taskName) })}>
            Edit
          </button>
          <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button className="mark" onClick={() => toggleStatus(todo.id)}>
            {todo.completed ? 'Mark as Not Completed' : 'Mark as Completed'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
