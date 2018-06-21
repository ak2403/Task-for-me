import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from './layoutComponent';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

const middleware = applyMiddleware(thunk);
const createdStore = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={createdStore}>
        <Layouts />
    </Provider>, document.getElementById('root'));
