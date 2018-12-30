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
        let {projects}=this.props
        
        return <div className="content-elements">
            {projects.length !== 0 ? <div className="project-list-container">
                {projects.map(project => {
                    return <div className="project-list">
                        <h4>{project.name}</h4>
                        </div>
                })}
            </div> : ''}
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