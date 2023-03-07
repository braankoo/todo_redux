import produce, {Draft} from "immer";
import {TodoState} from "./reducer";
import {ToDo} from "./reducer";
import {PayloadAction} from "@reduxjs/toolkit";

export function handleAddTodo(
    state: Draft<TodoState>,
    action: PayloadAction<ToDo>
) {
    const toDoIds = state.todos.map(todo => todo.ID);
    if (toDoIds.length === 0) {
        toDoIds.push(0);
    }
    action.payload.ID = Math.max(...toDoIds) + 1;
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