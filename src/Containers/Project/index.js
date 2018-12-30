import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
import Modal from '../../Components/modal'
import ProjectList from './children/project-list'
import ProjectAddition from './children/project-addition'

class ProjectComponent extends Component {
    state = {
        project_data: {
            name: '',
            toggleAdd: false
        }
    }

    shouldComponentUpdate = nextProps => {
        let { toggleAdd } = this.state
        let { is_project_added } = nextProps

        if (is_project_added && toggleAdd) {
            this.setState({
                toggleAdd: false
            })
        }

        return true
    }

    changeValue = (name, value) => {
        let { project_data } = this.state
        project_data[name] = value
        this.setState({
            project_data
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addProject(this.state.project_data)
    }

    toggleModal = () => this.setState({ toggleAdd: !this.state.toggleAdd })

    render() {
        let { toggleAdd } = this.state
        let { projects } = this.props

        return <React.Fragment>
            <div className="content-header">
                <h1>Projects</h1>
                <Button className="add-project" text="Add New Project" onClick={this.toggleModal} />
            </div>
            <ProjectList />

            {toggleAdd ? <Modal title="Add Project" content={<ProjectAddition />} closeModal={this.toggleModal} /> : ''}
        </React.Fragment>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        projects: project.projects,
        is_project_added: project.is_project_added
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent)