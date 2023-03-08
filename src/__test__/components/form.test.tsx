import {render, screen, fireEvent} from '@testing-library/react';
import Form from "src/components/ToDo/Form/Form";
import {Provider} from "react-redux";
import store from "src/store";
import {MemoryRouter} from "react-router-dom";
import {ToDo} from "../../types/Types";

describe('Form', () => {
    test('should call submitForm function when form is submitted', () => {
        const fn = jest.fn();
        const todo: ToDo = {ID: 0, Name: 'test', Description: '123', Status: false};
        render(<MemoryRouter>
            <Provider store={store}>
                <Form dataTestId="123"
                      onSubmit={fn}
                      ToDo={todo}/>
            </Provider>
        </MemoryRouter>);
        const form = screen.getByTestId('submit');
        fireEvent.submit(form);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});