import {render, screen, fireEvent} from '@testing-library/react';
import Form from "../../components/ToDo/Form/Form";
import {Provider} from "react-redux";
import store from "../../store";
import {MemoryRouter} from "react-router-dom";

describe('Form', () => {
    test('should call submitForm function when form is submitted', () => {
        const fn = jest.fn();
        render(<MemoryRouter><Provider store={store}><Form dataTestId="123" onSubmit={fn}/></Provider></MemoryRouter>);
        const form = screen.getByTestId('submit');
        fireEvent.submit(form);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});