import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import RouteTree from './containers/routes'
import Reducers from './redux/reducers'

const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

ReactDOM.render(
        <Provider store={store}>
            <RouteTree />
        </Provider>, document.getElementById('root'));
