import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, withRouter } from 'react-router-dom'
import { updateToken } from '../../redux/actions/user-actions'

class BasicRoute extends Component {
    componentDidMount = () => {
        this.props.updateToken()
    }

    render() {
        let Component = this.props.component
        let getToken = localStorage.getItem('authToken')

        if (!getToken) {
            return <Redirect to='/login' />
        }

        return (
            <Component />
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(BasicRoute))