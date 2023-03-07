import {createAction} from '@reduxjs/toolkit';
import {ToDo} from "../reducers/ToDo";

export const addToDo = createAction<ToDo>('ADD');
export const removeToDo = createAction<ToDo>('REMOVE');
export const changeToDoStatus = createAction<ToDo>('CHANGE_STATUS');