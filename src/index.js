import React from 'react';
import ReactDOM from 'react-dom';
import Layouts from './layout/main';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import reducers from './layout/redux/reducers/index';
import 'antd/dist/antd.css';
import './scss/style.css';

const client = new ApolloClient({})

const middleware = applyMiddleware(thunk);
const createdStore = createStore(reducers, middleware);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={createdStore}>
            <Layouts />
        </Provider>
    </ApolloProvider>, document.getElementById('root'));
