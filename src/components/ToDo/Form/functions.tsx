import React, {FormEvent} from "react";
import {Dispatch} from "redux";
import {ToDo} from "../../../reducers/ToDo/reducer";
import {addToDo, updateToDo} from "../../../actions/ToDo";

const createHandler = (
    event: FormEvent<HTMLFormElement>,
    dispatch: Dispatch,
    todo: ToDo,
    setName: React.Dispatch<string>,
    setDescription: React.Dispatch<string>,
    setSubmitted: React.Dispatch<boolean>,
    setMessage: React.Dispatch<string>
): void => {
    event.preventDefault();
    dispatch(addToDo(todo));
    setSubmitted(true);
    setMessage('Successfully added');
    setTimeout(() => {
        setDescription('');
        setName('');
        setSubmitted(false);
    }, 900);

};

const updateHandler = (
    event: FormEvent<HTMLFormElement>,
    dispatch: Dispatch,
    todo: ToDo,
    setName: React.Dispatch<string>,
    setDescription: React.Dispatch<string>,
    setSubmitted: React.Dispatch<boolean>,
    setMessage: React.Dispatch<string>
): void => {
    event.preventDefault();
    dispatch(updateToDo(todo));
    setMessage('Successfully updated');
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
    }, 900);

};

export {createHandler, updateHandler};