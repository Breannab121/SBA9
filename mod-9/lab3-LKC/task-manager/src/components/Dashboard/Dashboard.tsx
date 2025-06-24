import React, { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';
import type { Task, TaskFormData, FilterOptions } from '../../types';
import { filterTasks, generateId } from '../../utils/taskUtils';

interface DashboardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Dashboard: React.FC<DashboardProps> = ({ tasks, setTasks }) => {
  const [filters, setFilters] = useState<FilterOptions>({});

  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = { id: generateId(), ...data };
    setTasks(prev => [...prev, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
          : task
      )
    );
  };

  const filteredTasks = filterTasks(tasks, filters);

  return (
    <div>
      <h2>Task Dashboard</h2>
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter filters={filters} onChange={setFilters} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onToggleStatus={handleToggleStatus} />
    </div>
  );
};

export default Dashboard;
