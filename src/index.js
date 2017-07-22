import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import App from './containers/App'

// let store = createStore(rootReducer);

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);