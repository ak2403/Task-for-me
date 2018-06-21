import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './layouts/loginComponent';

class RequireAuth extends Component {
    constructor(props) {
        super();
    }

    render() {
        if (this.props.isAuthenicated) {
            let PrivateComponent = this.props.children.props.component;
            return <PrivateComponent />
        } else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = (props) => {
    return {
        isAuthenicated: props.authentication.isAuthenicated
    }
}

export default connect(mapStateToProps, null)(RequireAuth);
