import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './Authentication/loginForm';
import SignUp from './Authentication/signUp';
import AddCompany from './Authentication/addCompany';

class MainRoute extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route path='/login' component={LoginForm} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/add-company' component={AddCompany} />
                </div>
            </BrowserRouter>
        )
    }
}

export default MainRoute