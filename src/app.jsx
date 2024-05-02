import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import TodoForm from './components/todo-form/todo-form';
import TodoList from './components/todo-list/todo-list';
import TodoResults from './components/todo-results/todo-results';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#135D66' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6">ToDo Application</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoResults todos={todos} /> {/* Pass todos here */}
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
};

export default App;
