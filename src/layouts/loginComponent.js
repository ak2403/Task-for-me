import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../actions/authentication';

class LoginComponent extends Component {
    constructor(props) {
        super();
        this.onSubmit = this.onSubmit.bind(this);
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

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field inline>
                        <input type='text' placeholder='Name' name="username" />
                    </Form.Field>

                    <Form.Field inline>
                        <input type='password' placeholder='password' name="password" />
                    </Form.Field>
                    <button>Submit</button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginAction: loginAction
    }, dispatch);
}

const mapStateToProps = (props) => {
    return {}
}

export default connect(mapDispatchToProps, mapStateToProps)(LoginComponent);