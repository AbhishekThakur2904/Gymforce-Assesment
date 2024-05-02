import React from 'react';
import { Typography } from '@mui/material';

const TodoResults = ({ todos }) => {
  // Calculate completed tasks count
  const completedTasks = todos.filter((todo) => todo.checked).length;

  return (
    <Typography variant="h5" gutterBottom>
      Completed Tasks: {completedTasks}
    </Typography>
  );
};

export default TodoResults;
