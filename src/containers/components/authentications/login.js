import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginCall } from '../../../redux/actions/user-actions'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        user_data: {
            useremail: '',
            password: ''
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
        this.props.loginCall(this.state.user_data)
    }

    shouldComponentUpdate = nextProps => {
        let { is_user_logged, user } = nextProps

        if (is_user_logged) {
            if(user.is_company_added){
                this.props.history.push('/projects')
            }else{
                this.props.history.push('/add-company')
            }
        }
        return true
    }

    render() {
        let { useremail, password } = this.state.user_data
        return (
            <div>
                <div>
                    <input value={useremail} onChange={e => this.changeValue('useremail', e.target.value)} />
                </div>
                <div>
                    <input type="password" value={password} onChange={e => this.changeValue('password', e.target.value)} />
                </div>
                <div>
                    <button onClick={this.onSubmit}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = props => {
    let { user } = props

    return {
        is_user_logged: user.is_user_logged,
        user: user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loginCall
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))