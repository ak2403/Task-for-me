import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Validations from '../validations'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
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

    onSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state.login_data)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        text="User Email"
                        placeholder="Enter your email"
                        onChange={e => this.changeValue('useremail', e.target.value)} />

                    <Input
                        type="password"
                        text="Password"
                        placeholder="Enter your password"
                        onChange={e => this.changeValue('password', e.target.value)} />

                    <Button type="submit" text="Login" />
                </form>
                <div className="auth-options">
                    <Link to="/signup">Create own team</Link>
                    <Link to="/join">Join an existing team</Link>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_login_completed: authentication.is_login_completed,
        user_info: authentication.user_info
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))