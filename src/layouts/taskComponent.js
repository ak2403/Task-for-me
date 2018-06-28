import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class taskComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                
            </div >
        )
    }
}

export default connect(null, null)(taskComponent);