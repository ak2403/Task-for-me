import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../../Components/modal'
import ProjectEdit from '../Modal/project-edit'
import ProjectAddition from './project-addition'
import { getProjects } from '../../../Redux/Actions/project-actions'
import uuid from 'uuid/v4'

library.add(faPlus)

class ProjectList extends Component {
    state = {
        toggleAdd: false,
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

    addModal = () => this.setState({ toggleAdd: !this.state.toggleAdd })

    toggleModal = () => this.setState({ toggleEdit: !this.state.toggleEdit })

    render() {
        let { toggleAdd, toggleEdit, edit_project } = this.state
        let { projects } = this.props

        return <div className="content-elements">
            {projects.length !== 0 ? <div className="project-list-container">
                <div className="project-list add-project" onClick={this.addModal}>
                    <FontAwesomeIcon className="icons" icon="plus" />
                    Add Project
                </div>
                {projects.map(project => {
                    return <div key={uuid()} className="project-list">
                        <h4>{project.name}</h4>
                        <span onClick={()=>this.popEdit(project._id)}>Edit</span>
                    </div>
                })}
            </div> : ''}
            {toggleEdit ? <Modal title="Edit Project" content={<ProjectEdit id={edit_project} />} closeModal={this.toggleModal} /> : ''}
            {toggleAdd ? <Modal title="Add Project" content={<ProjectAddition />} closeModal={this.addModal} /> : ''}
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