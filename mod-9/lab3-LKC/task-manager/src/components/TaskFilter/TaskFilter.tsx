import React from 'react';
import type { FilterOptions } from '../../types';

interface TaskFilterProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filters, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div>
      <select name="status" value={filters.status || ''} onChange={handleChange}>
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" value={filters.priority || ''} onChange={handleChange}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={filters.search || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default TaskFilter;
