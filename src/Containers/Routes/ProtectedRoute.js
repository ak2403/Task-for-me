import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetSettings } from '../../Redux/Actions/authenticationActions'

class ProtectedRoute extends Component {

    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if (!get_token) {
            this.props.history.push('/login')
        }
    }

    shouldComponentUpdate = nextProps => {
        let { is_user_logout } = nextProps

        if (is_user_logout) {
            localStorage.removeItem('authToken')
            this.props.history.push('/login')
            this.props.resetSettings()
        }

        return true
    }

    render() {
        let Component = this.props.component
        return (<div>
            <Component />
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ resetSettings }, dispatch)

const mapStateToProps = props => {
    let { Authentication } = props
    return {
        is_user_logout: Authentication.is_user_logout
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute))