import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import TaskComponent from './components/Tasks';
import DetailedTaskComponent from './components/Tasks/DetailedTaskComponent';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute exact path="/tasks" name="tasks" component={TaskComponent} />
                        {/* <PrivateRoute exact path="/tasks/filter:issueparams?" name="tasks" component={TaskComponent} /> */}
                        <PrivateRoute exact path="/task/:issueID" component={DetailedTaskComponent} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default MainComponent;