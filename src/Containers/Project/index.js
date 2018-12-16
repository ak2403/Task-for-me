import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getProjects } from '../../Redux/Actions/projectActions'

class ProjectComponent extends Component{
    componentDidMount(){
        this.props.getProjects()
    }
    render(){
        return <div>
            Project
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent)