import {render, screen} from '@testing-library/react';
import Router from "../Router";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../store";

describe('TodoReducer', () => {
    it('check index route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/todos']}>
                    <Router/>
                </MemoryRouter>
            </Provider>
        );
         expect(screen.getByTestId('todo-index')).toBeInTheDocument();

    });
    it('check create route',  () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/todos/create']}>
                    <Router/>
                </MemoryRouter>
            </Provider>
        );
         expect(screen.getByTestId('todo-create')).toBeInTheDocument();
    });
    it('check edit route',  () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/todos/edit/1']}>
                    <Router/>
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText('ToDo does not exists')).toBeInTheDocument();
    });
});