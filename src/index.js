import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import thunk from 'redux-thunk';
import App from './containers/App'
import reducer from './reducers'
import './index.css'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);