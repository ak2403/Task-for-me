import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './protected-route'
import Login from '../components/authentications/login'
import AddCompany from '../components/authentications/add-company'
import Projects from '../components/projects'
import { updateToken } from '../../redux/actions/user-actions'

class RouteTree extends Component {
    componentDidMount = () => {
        this.props.updateToken()
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <ProtectedRoute path="/add-company" exact component={AddCompany} />
                        <ProtectedRoute path="/projects" exact component={Projects} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapPropsToState = props => {
    let { user } = props
    return {
        is_user_logged: user.is_user_logged
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    updateToken
}, dispatch)

export default connect(mapPropsToState, mapDispatchToProps)(RouteTree)