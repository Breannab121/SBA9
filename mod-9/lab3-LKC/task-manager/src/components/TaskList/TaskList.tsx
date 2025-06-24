// components/TaskList/TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleStatus }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggleStatus={onToggleStatus} />
      ))}
    </ul>
  );
};

export default TaskList;