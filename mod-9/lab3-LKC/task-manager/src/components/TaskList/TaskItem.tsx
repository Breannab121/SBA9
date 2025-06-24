import React from 'react';
import type { Task } from '../../types';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleStatus }) => {
  return (
    <li>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={() => onToggleStatus(task.id)}>Toggle Status</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;