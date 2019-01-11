import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Validations from '../validations'
import Input from '../../Components/input/text-input'
import Select from '../../Components/select'
import Button from '../../Components/button'
import { signUpUser, getCompany, joinUser } from '../../Redux/Actions/authenticationActions'

class SignUp extends Component {
    state = {
        user_data: {
        },
        validations: {
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
        let { view } = this.props
        if (view === 'join') {
            this.props.joinUser(this.state.user_data)
        } else {
            this.props.signUpUser(this.state.user_data)
        }
    }

    shouldComponentUpdate = nextProps => {
        return true
    }

    componentDidMount = () => {
        let { view } = this.props

        if (view === 'signup') {
            this.setState({
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
            })
        } else {
            this.props.getCompany()
            this.setState({
                user_data: {
                    username: '',
                    useremail: '',
                    password: '',
                    confirm_password: '',
                    company: ''
                },
                validations: {
                    username: false,
                    useremail: false,
                    password: false,
                    confirm_password: false,
                    company: ''
                }
            })
        }
    }

    render() {
        let { view, companies } = this.props

        const company_options = _.isEmpty(companies) ? [] : companies.map(list => {
            return {
                name: list.name,
                value: list._id
            }
        })

        return <React.Fragment>
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

                {view === 'join' ? <Select
                    text="Select Company"
                    options={company_options}
                    onChange={e => this.changeValue('company', e.target.value)} />
                    : ''}

                <Button type="submit" text="Signup" />
            </form>
            <div className="auth-options">
                <Link to="/login">Have an account? Login here</Link>
            </div>
        </React.Fragment>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signUpUser,
    joinUser,
    getCompany
}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        companies: authentication.companies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)