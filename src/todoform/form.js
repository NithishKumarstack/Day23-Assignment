// TodoForm.js
import './form.css';
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;
    const newTodo = {
      id: Date.now(),
      taskName,
      description,
      completed: false,
    };
    addTodo(newTodo);
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='total'>
        <input type="text" placeholder='ToDo Name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <br />
        <input type="text" placeholder='ToDo Description' value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
