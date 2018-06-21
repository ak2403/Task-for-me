import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class projectComponent extends Component{
    render(){
        return (
            <div>
                Create a Project
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    debugger
    return {
        isAuthenicated: props.authentication.isAuthenicated,
        errorMsg: props.authentication.errorMsg
    }
}

export default connect(mapStateToProps, null)(projectComponent);