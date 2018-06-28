import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftNavigator from '../basic/leftNavigator';
import TopNavigator from '../basic/topNavigator';

class CommonLayout extends Component {
    constructor(props) {
        super();
    }

    render() {
        debugger
        return (
            <div className="main-container">
                <div className="left-container">
                    <LeftNavigator />
                </div>
                <div className="right-container">
                    <TopNavigator />
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonLayout;
