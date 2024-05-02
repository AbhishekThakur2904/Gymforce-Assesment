// todo-list.jsx
import React from 'react';
import { List, ListItem } from '@mui/material';
import Checkbox from '../checkbox/checkbox';
import './todo-list.scss' // Assuming Checkbox component is exported from 'Checkbox' file

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };


  return (
    <div className="todo-list">
      <span
        className="todo-list-title"
        style={{
          background: '#77B0AA',
          padding: '5px',
          borderRadius: '5px',
          marginBottom: '10px',
          display: 'inline-block',
          textAlign: 'center', // Center the text horizontally
          width: '100%',
          color:'white' // Ensure full width for centering
        }}
      >
        Things to do:
      </span>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {todos.length ? (
          todos.map((todoItem) => (
            <ListItem
              key={todoItem.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background-color 0.3s',
                backgroundColor: '#77B0AA', // Add animation for background color change
                '&:hover': {
                  backgroundColor: '#135D66', // Change background color on hover
                },
              }}
            >
              <Checkbox
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            </ListItem>
          ))
        ) : (
          <div className="no-todos">Looks like you're absolutely free today!</div>
        )}
      </List>
    </div>
  );
};

export default TodoList;
