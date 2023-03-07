import {ToDo, TodoReducer} from "../../reducers/ToDo/reducer";
import {ToDoActionTypes} from "../../actions/ToDo";


describe('TodoReducer', () => {

    test('handles addToDo action', () => {
        const initialState = {todos: []};
        const action = {type: ToDoActionTypes.ADD, payload: {ID: 0, Name: 'buy milk', Status: false}};
        const nextState = TodoReducer(initialState, action);
        expect(nextState).toEqual({todos: [{ID: 0, Name: 'buy milk', Status: false}]});
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
