import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommonRoute from './Routes/CommonRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import LoginForm from './Authentication/loginForm';
import SignUp from './Authentication/signUp';
import AddCompany from './Authentication/addCompany';
import DashboardView from './Dashboard';
import ProjectView from './Project';
import IssueView from './Issues';
import { retrieveCall } from '../Redux/Actions/authenticationActions';

class MainRoute extends Component {
    componentDidMount = () => {
        if (!this.props.sign_user_id) {
            this.props.retrieveCall()
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-main">
                    <Switch>
                        <CommonRoute exact path='/login' component={LoginForm} />
                        <CommonRoute exact path='/signup' component={SignUp} />
                        <ProtectedRoute exact path='/company/add-company' identify="add-company" component={AddCompany} />

                        <ProtectedRoute exact path='/dashboard' component={DashboardView} />
                        <ProtectedRoute exact path='/projects' component={ProjectView} />
                        <ProtectedRoute exact path='/issues' component={IssueView} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ retrieveCall }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        sign_user_id: authentication.sign_user_id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoute)