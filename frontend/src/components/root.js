import React from 'react';
import { Provider } from 'react-redux';
import { hashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store} >
        <hashRouter>
            <App/>
        </hashRouter>
    </Provider>
)

export default Root;