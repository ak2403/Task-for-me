import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Validations from '../validations'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
import { signUpUser } from '../../Redux/Actions/authenticationActions'

class SignUp extends Component {
    state = {
        user_data: {
            username: '',
            useremail: '',
            password: '',
            confirm_password: ''
        },
        validations: {
            username: false,
            useremail: false,
            password: false,
            confirm_password: false
        }
    }

    changeValue = (name, value) => {
        let { user_data } = this.state
        user_data[name] = value
        this.setState({
            user_data: user_data
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.history.push('/add-company')
        this.props.signUpUser(this.state.user_data)
    }

    shouldComponentUpdate = nextProps => {
        // if (nextProps.is_signup_completed) {
        //     this.props.history.push('/add-company')
        // }
        return true
    }

    render() {

        return <div>
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    text="User Name"
                    placeholder="Enter your name"
                    onChange={e => this.changeValue('username', e.target.value)} />

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

                <Input
                    type="password"
                    text="Confirm Password"
                    placeholder="Confirm your password"
                    onChange={e => this.changeValue('confirm_password', e.target.value)} />

                <Button type="submit" text="Signup" />
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signUpUser }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_signup_completed: authentication.is_signup_completed
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)