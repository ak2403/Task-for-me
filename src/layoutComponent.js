import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterComponent from './layouts/registerComponent';
import LoginComponent from './layouts/loginComponent';
import ProjectComponent from './layouts/projectComponent';
import TaskComponent from './layouts/taskComponent';
import CommonLayout from './layouts/CommonLayout';
import { setToken } from './actions/authentication';
import RequireAuth from './requireAuth';

class layoutComponent extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {
        this.props.setToken();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/register" component={RegisterComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <CommonLayout>
                            <Switch>
                                <Route exact path="/projects" component={ProjectComponent} />
                                <Route path="/tasks" component={ProjectComponent} />
                            </Switch>
                        </CommonLayout>
                    </Switch>
                </BrowserRouter>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setToken: setToken
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(layoutComponent);