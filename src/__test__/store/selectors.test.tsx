import {selectAllTodos} from '../../selectors/ToDo';
import {ToDo} from "../../reducers/ToDo/reducer";

describe('selectAllTodos', () => {
    it('returns an array of todos from the state', () => {
        const state = {
            todos: [
                {ID: 1, Name: 'Buy milk', Status: false},
                {ID: 2, Name: 'Walk the dog', Status: true},
                {ID: 3, Name: 'Do laundry', Status: false},
            ] as ToDo[],
        };
        const result = selectAllTodos(state);
        expect(result).toEqual(state.todos);
    });

    it('returns an empty array if there are no todos in the state', () => {
        const state = {
            todos: [],
        };
        const result = selectAllTodos(state);
        expect(result).toEqual([]);
    });
});