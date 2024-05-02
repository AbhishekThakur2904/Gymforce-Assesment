import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import './todo-form.scss'

const TodoForm = ({ todos, setTodos }) => {
  const [task, setTask] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTodo = {
        id: todos.length + 1,
        label: task,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', marginTop: '50px' }}>
      <form onSubmit={handleAddTodo}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              sx={{ borderRadius: '50px' }} // Increased border radius for TextField
            />
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#77B0AA',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#135D66', // Change button color on hover
                },
              }}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TodoForm;
