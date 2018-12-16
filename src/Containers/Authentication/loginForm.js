import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser } from '../../Redux/Actions/authenticationActions'

class LoginForm extends Component {
    state = {
        login_data: {
            useremail: '',
            password: ''
        }
    }

    changeValue = (name, value) => {
        let { login_data } = this.state
        login_data[name] = value
        this.setState({
            login_data: login_data
        })
    }

    onSubmit = () => {
        this.props.loginUser(this.state.login_data)
    }

    shouldComponentUpdate = nextProps => {
        let { user_info, is_login_completed } = nextProps

        if (is_login_completed) {
            if (user_info.hasOwnProperty('company')) {
                this.props.history.push('/issues')
            } else {
                this.props.history.push('/add-company')
            }
        }

        return true
    }

    render() {
        return (
            <div>
                <input onChange={e => this.changeValue('useremail', e.target.value)} />
                <input onChange={e => this.changeValue('password', e.target.value)} />
                <button onClick={this.onSubmit}>Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch)

const mapStateToProps = props => {
    let { Authentication } = props
    return {
        is_login_completed: Authentication.is_login_completed,
        user_info: Authentication.user_info
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))