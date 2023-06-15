export const todoList = (state) => {
  const search = searchText(state).toLowerCase();
  const status = filterStatus(state);
  const priorities = filterPriorities(state);
  const todoRemain = state.todoList.filter((todo) => {
    if (status === 'All') {
      return priorities.length
        ? todo.name.toLowerCase().includes(search) && priorities.includes(todo.priority)
        : todo.name.toLowerCase().includes(search);
    }

    return priorities.length
      ? todo.name.toLowerCase().includes(search) &&
          (status === 'Completed' ? todo.completed : !todo.completed) &&
          priorities.includes(todo.priority)
      : todo.name.toLowerCase().includes(search) &&
          (status === 'Completed' ? todo.completed : !todo.completed);
  });
  return todoRemain;
};

export const searchText = (state) => state.filter.search;
export const filterStatus = (state) => state.filter.status;
export const filterPriorities = (state) => state.filter.priorities;
