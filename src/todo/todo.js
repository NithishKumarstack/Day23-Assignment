// TodoApp.js
import React, { useState, useEffect } from 'react';
import TodoForm from '../todoform/form.js';
import TodoList from '../todolist/list.js';
import FilterStatus from '../filterstatus/filter.js';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    // Fetch todos from storage or API on component mount
    // For simplicity, I'll use local storage for now
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save todos to storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const filteredTodos = todos.filter(todo => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'completed') return todo.completed;
    if (filterStatus === 'not-completed') return !todo.completed;
    return true;
  });

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <FilterStatus setFilterStatus={setFilterStatus} />
      <TodoList
        todos={filteredTodos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleStatus={toggleStatus}
      />
    </div>
  );
};

export default TodoApp;
