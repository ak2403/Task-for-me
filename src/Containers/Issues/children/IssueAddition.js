import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../../../Components/input/text-input'
import Select from '../../../Components/select'
import Button from '../../../Components/button'
import { getProjects, addProject } from '../../../Redux/Actions/project-actions'

class IssueAddition extends Component {
    state = {
        issue_data: {
            name: '',
            type: ''
        }
    }

    changeValue = (name, value) => {
        let { issue_data } = this.state
        issue_data[name] = value
        this.setState({
            issue_data
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addProject(this.state.issue_data)
    }

    render() {
        let type_options = [{
            name: 'IT',
            value: 'it'
        }]

        return <div>
            
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    text="Title"
                    placeholder="Enter the title"
                    onChange={e => this.changeValue('name', e.target.value)} />

                <Select
                    text="Type of the project"
                    placeholder="Enter the type of the project"
                    options={type_options}
                    onChange={e => this.changeValue('type', e.target.value)} />

                <Button type="submit" text="Add Project" />
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        // projects: project.projects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueAddition)