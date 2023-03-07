import {TodoState} from '../reducers/ToDo/reducer';

export const selectAllTodos = (state: TodoState) => state.todos;
