import configureStore from 'redux-mock-store';
import {Middleware} from "redux";
import {addToDo, changeToDoStatus, removeToDo, ToDoActionTypes} from "../../actions/ToDo";
import {ToDo} from "../../reducers/ToDo/reducer";

describe('TodoReducer', () => {
    const middlewares = [] as Middleware[];
    const mockStore = configureStore(middlewares)
    it('creates an ADD action object with a new todo', () => {
        const initialState = {todos: []};
        const store = mockStore(initialState);
        const todo: ToDo = {ID: 0, Name: 'buy milk', Status: false};
        const expectedActions = [{type: ToDoActionTypes.ADD, payload: todo}];
        store.dispatch(addToDo(todo));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates a REMOVE action object with a todo to remove', () => {
        const initialState = {todos: []};
        const store = mockStore(initialState);
        const todo: ToDo = {ID: 0, Name: 'buy milk', Status: false};
        const expectedActions = [{type: ToDoActionTypes.REMOVE, payload: todo}];
        store.dispatch(removeToDo(todo));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates a CHANGE_STATUS action object with a todo to update', () => {
        const initialState = {todos: []};
        const store = mockStore(initialState);
        const todo: ToDo = {ID: 0, Name: 'buy milk', Status: false};
        const expectedActions = [{type: ToDoActionTypes.CHANGE_STATUS, payload: todo}];
        store.dispatch(changeToDoStatus(todo));
        expect(store.getActions()).toEqual(expectedActions);
    });
});