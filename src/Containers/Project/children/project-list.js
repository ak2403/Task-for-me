import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '../../../Components/modal'
import ProjectEdit from '../Modal/project-edit'
import { getProjects } from '../../../Redux/Actions/project-actions'
import uuid from 'uuid/v4'

class ProjectList extends Component {
    state = {
        toggleEdit: false,
        edit_project: ''
    }

    componentDidMount() {
        this.props.getProjects()
    }

    popEdit = id => {
        this.setState({
            toggleEdit: true,
            edit_project: id
        })
    }

    toggleModal = () => this.setState({ toggleEdit: !this.state.toggleEdit })

    render() {
        let { toggleEdit, edit_project } = this.state
        let { projects } = this.props

        return <div className="content-elements">
            {projects.length !== 0 ? <div className="project-list-container">
                {projects.map(project => {
                    return <div key={uuid()} className="project-list">
                        <h4>{project.name}</h4>
                        <span onClick={()=>this.popEdit(project._id)}>Edit</span>
                    </div>
                })}
            </div> : ''}
            {toggleEdit ? <Modal title="Edit Project" content={<ProjectEdit id={edit_project} />} closeModal={this.toggleModal} /> : ''}
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