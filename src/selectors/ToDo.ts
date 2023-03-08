import {ToDo, TodoState} from "src/types/Types";

export const selectAllTodos = (state: TodoState) => state.todos;

export const selectTodosUsingPagination = (state: TodoState) => (offset: number, limit: number) => {
    return state.todos.slice(offset, limit);
}
export const filterTodos = (state: TodoState) => (query: string) => {
    return state.todos.filter(toDo => toDo.Name.includes(query));
}
export const selectTodoById = (id: number) => (state: TodoState): ToDo | undefined => {
    return state.todos.find(todo => todo.ID === id);
}

export const getLatestToDo = (state: TodoState): ToDo | undefined => {
    return state.todos[state.todos.length - 1];
}