import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getProjects} from '../../../../redux/actions/project-actions'

class ProjectList extends Component{
    componentDidMount = () => {
        this.props.getProjects()
    }

    render(){
        return (<div>
            
        </div>)
    }
}

const mapStateToProps = props => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)