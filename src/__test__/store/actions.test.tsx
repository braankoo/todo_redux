import {TodoReducer} from "src/reducers/ToDo/reducer";
import {ToDoActionTypes} from "src/actions/ToDo";
import {ToDo} from "src/reducers/ToDo/reducer";


describe('TodoReducer', () => {

    test('handles addToDo action', () => {
        const initialState = {todos: []};
        const action = {type: ToDoActionTypes.ADD, payload: {Name: 'buy milk', Status: false}};
        const nextState = TodoReducer(initialState, action);
        expect(nextState).toEqual({todos: [{ID: 1, Name: 'buy milk', Status: false}]});
    });

    test('handles removeToDo action', () => {
        const initialState = {todos: [{ID: 0, Name: 'buy milk', Status: false}] as ToDo[]};
        const action = {type: ToDoActionTypes.REMOVE, payload: {ID: 0, Name: 'buy milk', Status: false}};
        const nextState = TodoReducer(initialState, action);
        expect(nextState).toEqual({todos: []});
    });

    test('handles changeToDoStatus action', () => {
        const initialState = {todos: [{ID: 0, Name: 'buy milk', Status: false}] as ToDo[]};
        const action = {type: ToDoActionTypes.CHANGE_STATUS, payload: {ID: 0, Name: 'buy milk', Status: false}};
        const nextState = TodoReducer(initialState, action);
        expect(nextState).toEqual({todos: [{ID: 0, Name: 'buy milk', Status: true}]});
    });

});
