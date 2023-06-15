import filterReducer from '../components/Filters/filterSlice';
import todoListReducer from '../components/TodoList/todoSlice';

const rootReducer = (state = {}, action) => {
  return {
    filter: filterReducer(state.filter, action),
    todoList: todoListReducer(state.todoList, action),
  };
};

export default rootReducer;
