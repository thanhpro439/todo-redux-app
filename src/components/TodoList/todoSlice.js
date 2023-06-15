import { v4 as uuidv4 } from 'uuid';

const initState = [
  { id: uuidv4(), name: 'Learn React', completed: false, priority: 'High' },
  { id: uuidv4(), name: 'Learn Redux', completed: true, priority: 'Medium' },
  { id: uuidv4(), name: 'Learn JavaScript', completed: false, priority: 'Low' },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];

    case 'todoList/toggleTotoStatus':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todoListReducer;
