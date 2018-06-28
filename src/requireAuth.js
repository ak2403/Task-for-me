import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './layouts/loginComponent';
import LeftNavigator from './basic/leftNavigator';
import TopNavigator from './basic/topNavigator';

class RequireAuth extends Component {
    constructor(props) {
        super();
    }

    render() {
        if (this.props.isAuthenicated) {
            debugger
            let PrivateComponent = this.props.children.props.component;
            return (
                <div className="main-container">
                    <div className="left-container">
                        <LeftNavigator />
                    </div>
                    <div className="right-container">
                        <TopNavigator />
                        <div>
                            <PrivateComponent />
                        </div>
                    </div>
                </div>
                )
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
