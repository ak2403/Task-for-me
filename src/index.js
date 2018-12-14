import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Containers/main';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './Redux/Reducers';
import './Style/style.css';

const middleware = applyMiddleware(thunk);
const createdStore = createStore(reducers, middleware);

ReactDOM.render(
        <Provider store={createdStore}>
            <Main />
        </Provider>, document.getElementById('root'));
