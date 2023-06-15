export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const toggleTotoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTotoStatus',
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: 'filter/searchFilterChange',
    payload: text,
  };
};

export const filterStatusChange = (status) => {
  return {
    type: 'filter/filterStatusChange',
    payload: status,
  };
};

export const filterPriorityChange = (status) => {
  return {
    type: 'filter/filterPriorityChange',
    payload: status,
  };
};
