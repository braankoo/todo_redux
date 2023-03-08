import {render, screen, fireEvent} from "@testing-library/react";
import Table from "../../../components/ToDo/Index/Table";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {BrowserRouter} from "react-router-dom";
import {ToDo} from "../../../types/Types";

const mockStore = configureStore([]);

describe('Table', () => {
    test('check if remove button is working', async () => {
        const initialState = {
            todos: [
                {ID: 1, Name: 'Todo 1', Description: 'test', Status: false},
                {ID: 2, Name: 'Todo 2', Status: false},
            ] as ToDo[],
        };
        const store = mockStore(initialState);
        const prompt = jest.spyOn(window, 'confirm').mockReturnValue(true);
        render(<BrowserRouter><Provider store={store}><Table/></Provider></BrowserRouter>)
        const removeButton = screen.getByTestId('remove-1');
        fireEvent.click(removeButton);
        expect(prompt).toHaveBeenCalledTimes(1);

        const actions = store.getActions()
        expect(actions).toEqual([{
            payload: {
                "Description": "test",
                "ID": 1,
                "Name": "Todo 1",
                "Status": false,
            },
            "type": "REMOVE"
        }]);


    })
    ;
})