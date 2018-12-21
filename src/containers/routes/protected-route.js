import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'
import { updateToken, logout } from '../../redux/actions/user-actions'

class ProtectedRoute extends Component {
    componentDidMount = () => {
        this.props.updateToken()
    }

    logout = () => {
        this.props.logout()
        this.props.history.push('/login')
    }

    render() {
        let Component = this.props.component
        let getToken = localStorage.getItem('authToken')

        if (!getToken) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <button onClick={this.logout}>Logout</button>
                <Component />
            </div>
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
    updateToken,
    logout
}, dispatch)

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(ProtectedRoute))