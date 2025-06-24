import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import type { Task } from './types';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return <Dashboard tasks={tasks} setTasks={setTasks} />;
};

export default App;