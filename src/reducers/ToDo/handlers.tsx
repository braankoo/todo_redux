import produce, {Draft} from "immer";
import {PayloadAction} from "@reduxjs/toolkit";
import {ToDo, TodoState} from "src/types/Types";

export function handleAddTodo(
    state: Draft<TodoState>,
    action: PayloadAction<ToDo>
) {
    const toDoIds: number[] = state.todos
        .filter(todo => typeof todo.ID !== 'undefined')
        .map(todo => todo.ID as number);

    action.payload.ID = toDoIds.length > 0 ? Math.max(...toDoIds) + 1 : 1;

    state.todos.push(action.payload);
}

export function handleUpdateToDo(
    state: Draft<TodoState>,
    action: PayloadAction<ToDo>
) {
    const index = state.todos.findIndex(todo => todo.ID === action.payload.ID);
    state.todos[index] = action.payload;
}


export function handleRemoveTodo(
    state: Draft<TodoState>,
    action: PayloadAction<ToDo>
) {
    const index = state.todos.findIndex(todo => todo.ID === action.payload.ID);
    state.todos.splice(index, 1);
}

export function handleTodoStatus(
    state: Draft<TodoState>,
    action: PayloadAction<ToDo>
) {
    const toDoIndex = state.todos.findIndex(todo => todo.ID === action.payload.ID);
    if (toDoIndex >= 0) {
        state.todos[toDoIndex] = produce(action.payload, draftTodo => {
            draftTodo.Status = !draftTodo.Status;
        });
    }
}