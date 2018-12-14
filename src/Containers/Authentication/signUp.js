import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signUpUser } from '../../Redux/Actions/authenticationActions'

class SignUp extends Component {
    state = {
        user_data: {
            username: '',
            useremail: '',
            password: '',
            confirm_password: ''
        }
    }

    changeValue = (name, value) => {
        let { user_data } = this.state
        user_data[name] = value
        this.setState({
            user_data: user_data
        })
    }

    onSubmit = () => {
        this.props.history.push('/add-company')
        this.props.signUpUser(this.state.user_data)
    }

    shouldComponentUpdate = nextProps => {
        if(nextProps.is_signup_completed){
            this.props.history.push('/add-company')
        }
        return true
    }

    render() {

        return <div>
            <div>
                <input onChange={e => this.changeValue('username', e.target.value)} />
            </div>
            <div>
                <input onChange={e => this.changeValue('useremail', e.target.value)} />
            </div>
            <div>
                <input onChange={e => this.changeValue('password', e.target.value)} />
            </div>
            <div>
                <input onChange={e => this.changeValue('confirm_password', e.target.value)} />
            </div>
            <button onClick={this.onSubmit}>Signup</button>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signUpUser }, dispatch)

const mapStateToProps = props => {
    let { Authentication } = props
    return {
        is_signup_completed: Authentication.is_signup_completed
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)