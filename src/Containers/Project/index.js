import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
import ProjectList from './children/project-list'

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

    render() {

        return <React.Fragment>
            <div className="content-header">
                <h1>Projects</h1>
            </div>
            <ProjectList />
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