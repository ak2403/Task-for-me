import React, { Component } from 'react';
import { Form, Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../actions/authentication';

class LoginComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            errorMsg: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.removeMsg = this.removeMsg.bind(this);
    }

    removeMsg(e) {
        this.setState({
            errorMsg: ''
        })
    }

    onSubmit(e) {
        let formValues = e.target;
        let { username, useremail, password, project } = formValues;

        if (username.value && password.value) {
            let userData = {
                username: username.value,
                password: password.value
            }
            this.props.loginAction(userData)
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isAuthenicated) {
            newProps.history.push('/projects');
        } else {
            this.setState({
                errorMsg: newProps.errorMsg
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.errorMsg ? <Label style={{ border: '1px solid #f5c6cb', backgroundColor: '#f8d7da' }}>{this.state.errorMsg} <Icon name='delete' onClick={this.removeMsg} /></Label> : ''}
                <Form onSubmit={this.onSubmit}>
                    <Form.Field inline>
                        <input type='text' placeholder='Name' name="username" />
                    </Form.Field>

                    <Form.Field inline>
                        <input type='password' placeholder='password' name="password" />
                    </Form.Field>
                    <button>Submit</button>
                </Form>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginAction: loginAction
    }, dispatch);
}

const mapStateToProps = (props) => {
    return {
        isAuthenicated: props.authentication.isAuthenicated,
        errorMsg: props.authentication.errorMsg
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);