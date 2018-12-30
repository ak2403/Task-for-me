import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
import ProjectList from './children/project-list'
import { getProjects, addProject } from '../../Redux/Actions/project-actions'

class ProjectComponent extends Component {
    state = {
        project_data: {
            name: ''
        }
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

    render() {
        let { projects } = this.props
        console.log(projects)
        return <div>
            <ProjectList />
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    text="Project Name"
                    placeholder="Enter the project"
                    onChange={e => this.changeValue('name', e.target.value)} />

                <Button type="submit" text="Add Project" />
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects,
    addProject
}, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        projects: project.projects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent)