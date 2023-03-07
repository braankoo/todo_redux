import {TodoState} from '../reducers/ToDo';

export const selectAllTodos = (state: TodoState) => state.todos;
