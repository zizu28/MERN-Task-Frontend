import React from 'react';
import { Provider } from 'react-redux';
import {render} from "@testing-library/react";
import { store } from './app/store';
import App from './App';
import './index.css';

describe("App", () => {
    it("renders without crashing", () => {
        const {container} = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const rootContainer = container.firstChild;
        expect(rootContainer).toBeInTheDocument();
    })
})

