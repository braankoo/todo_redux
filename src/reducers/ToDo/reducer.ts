import {createReducer} from '@reduxjs/toolkit';
import {addToDo, changeToDoStatus, removeToDo, updateToDo} from '../../actions/ToDo';
import {handleAddTodo, handleRemoveTodo, handleUpdateToDo, handleTodoStatus} from "./helpers";

interface ToDo {
    Name: string;
    Description?: string;
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
    builder.addCase(addToDo, handleAddTodo);
    builder.addCase(updateToDo, handleUpdateToDo);
    builder.addCase(removeToDo, handleRemoveTodo);
    builder.addCase(changeToDoStatus, handleTodoStatus);
});

export type {ToDo, TodoState};
export {TodoReducer};