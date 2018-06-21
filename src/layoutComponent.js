import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RegisterComponent from './layouts/registerComponent';
import LoginComponent from './layouts/loginComponent';
import App from './App';

class layoutComponent extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/register" component={RegisterComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/projects" component={App} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default layoutComponent;