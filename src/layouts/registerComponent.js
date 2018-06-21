import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerAction } from '../actions/authentication';

class RegisterComponent extends Component {
    constructor(props) {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        let formValues = e.target;
        let { username, useremail, password, project } = formValues;

        if (username.value && useremail.value && password.value && project.value) {
            let userData = {
                username: username.value,
                useremail: useremail.value,
                password: password.value,
                project: project.value
            };
            registerAction(userData);
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
                        <input type='text' placeholder='Email' name="useremail" />
                    </Form.Field>

                    <Form.Field inline>
                        <input type='password' placeholder='password' name="password" />
                    </Form.Field>

                    <Form.Field inline>
                        <input type='text' placeholder='Project' name="project" />
                    </Form.Field>
                    <button>Submit</button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        registerAction: registerAction
    }, dispatch);
}

const mapStateToProps = (props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);