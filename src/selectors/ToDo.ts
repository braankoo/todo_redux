import {TodoState} from "src/types/Types";

export const selectAllTodos = (state: TodoState) => state.todos;

export const selectTodosUsingPagination = (state: TodoState) => (offset: number, limit: number) => {
    return state.todos.slice(offset, limit);
}
export const filterTodos = (state: TodoState) => (query: string) => {
    return state.todos.filter(toDo => toDo.Name.includes(query));
}
