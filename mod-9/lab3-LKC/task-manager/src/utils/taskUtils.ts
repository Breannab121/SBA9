export const filterTasks = (tasks, filters) => {
  return tasks.filter(task => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.search || task.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });
};

export const sortTasks = (tasks, key, direction = 'asc') => {
  return [...tasks].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};