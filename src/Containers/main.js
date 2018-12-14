import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CommonRoute from './Routes/CommonRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import LoginForm from './Authentication/loginForm';
import SignUp from './Authentication/signUp';
import AddCompany from './Authentication/addCompany';
import DashboardView from './Dashboard';

class MainRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <CommonRoute exact path='/login' component={LoginForm} />
                        <CommonRoute exact path='/signup' component={SignUp} />
                        <Route exact path='/add-company' component={AddCompany} />
                        <ProtectedRoute exact path='/dashboard' component={DashboardView} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainRoute