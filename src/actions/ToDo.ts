import {createAction} from '@reduxjs/toolkit';
import { ToDo} from "../reducers/ToDo/reducer";
export enum ToDoActionTypes {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    UPDATE = 'UPDATE',
    CHANGE_STATUS = 'CHANGE_STATUS',
}
export const addToDo = createAction<ToDo>(ToDoActionTypes.ADD);
export const updateToDo = createAction<ToDo>(ToDoActionTypes.UPDATE);
export const removeToDo = createAction<ToDo>(ToDoActionTypes.REMOVE);
export const changeToDoStatus = createAction<ToDo>(ToDoActionTypes.CHANGE_STATUS);