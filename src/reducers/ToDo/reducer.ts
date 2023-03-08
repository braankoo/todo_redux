import {createReducer} from '@reduxjs/toolkit';
import {addToDo, changeToDoStatus, removeToDo, updateToDo} from 'src/actions/ToDo';
import {handleAddTodo, handleRemoveTodo, handleUpdateToDo, handleTodoStatus} from "./handlers";
import {ToDo, TodoState} from "src/types/Types";

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