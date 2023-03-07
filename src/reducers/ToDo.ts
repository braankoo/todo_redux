import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {addToDo, changeToDoStatus, removeToDo} from '../actions/ToDo';
import produce, {Draft} from 'immer';

interface ToDo {
    Name: string;
    Description: string;
    Status: boolean;
    ID: number
}

interface TodoState {
    todos: ToDo[];
}

const initialState: TodoState = {
    todos: [],
};

const TodoReducer = createReducer(initialState, (builder) => {

    builder.addCase(addToDo, (state: Draft<TodoState>, action: PayloadAction<ToDo>) => {
        action.payload.ID = state.todos.length;
        state.todos.push(action.payload);
    });
    builder.addCase(removeToDo, (state: Draft<TodoState>, action: PayloadAction<ToDo>) => {
        const index = state.todos.findIndex(todo => todo === action.payload);
        state.todos.splice(index, 1);
    });
    builder.addCase(changeToDoStatus, (state: Draft<TodoState>, action: PayloadAction<ToDo>) => {
        const toDoIndex = state.todos.findIndex(todo => todo.ID === action.payload.ID);
        if (toDoIndex >= 0) {
            state.todos[toDoIndex] = produce(action.payload, draftTodo => {
                draftTodo.Status = !draftTodo.Status;
            });
        }
    });
});

export {TodoReducer, TodoState};
export type {ToDo};