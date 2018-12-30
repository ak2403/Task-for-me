import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getProjects } from '../../../Redux/Actions/project-actions'

class ProjectList extends Component {
    state = {
    }

    componentDidMount() {
        this.props.getProjects()
    }

    render() {
        return <div>
            Project
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects
}, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        projects: project.projects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)