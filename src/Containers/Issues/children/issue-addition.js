import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Input from '../../../Components/input/text-input'
import Select from '../../../Components/select'
import Button from '../../../Components/button'
import { getProjects, getMembers } from '../../../Redux/Actions/project-actions'
import { addIssue } from '../../../Redux/Actions/issue-actions'

class IssueAddition extends Component {
    state = {
        issue_data: {
            title: '',
            type: '',
            version: '',
            description: '',
            status: '',
            project: '',
            created_by: '',
            assignee: { id: '', username: '' }
        }
    }

    changeValue = (name, value) => {
        let { issue_data } = this.state
        issue_data[name] = value
        this.setState({
            issue_data
        })
    }

    changeAssignee = id => {
        let { issue_data } = this.state
        let { members } = this.props
        let selected_member = _.filter(members, (member) => {
            return member._id === id
        })
        issue_data.assignee.id = selected_member[0]._id
        issue_data.assignee.username = selected_member[0].username
        this.setState({
            issue_data
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addIssue(this.state.issue_data)
    }

    componentDidMount = () => {
        this.props.getProjects()
        this.props.getMembers()
    }

    render() {
        let { projects, members } = this.props

        let project_options = projects.map(project => {
            return {
                name: project.name,
                value: project._id
            }
        })

        let member_options = members.map(member => {
            return {
                name: member.username,
                value: member._id
            }
        })

        let status_options = [{
            name: 'To Do',
            value: 'to-do'
        }, {
            name: 'In Development',
            value: 'in-development'
        }]

        let type_options = [{
            name: 'Issue',
            value: 'issue'
        }, {
            name: 'Requirement',
            value: 'requirement'
        }, {
            name: 'Feature',
            value: 'feature'
        }]

        return <div>
            <form onSubmit={this.onSubmit}>
                <Select
                    text="Type"
                    placeholder="Enter the type of the issue"
                    options={type_options}
                    onChange={e => this.changeValue('type', e.target.value)} />
                <Input
                    type="text"
                    text="Title"
                    placeholder="Enter the title"
                    onChange={e => this.changeValue('title', e.target.value)} />

                <Input
                    type="text"
                    text="Description"
                    placeholder="Enter the description"
                    onChange={e => this.changeValue('description', e.target.value)} />

                <Select
                    text="Status"
                    placeholder="Enter the status of the issue"
                    options={status_options}
                    onChange={e => this.changeValue('status', e.target.value)} />

                <Select
                    text="Project"
                    placeholder="Enter the project for the issue"
                    options={project_options}
                    onChange={e => this.changeValue('project', e.target.value)} />

                <Select
                    text="Assignee"
                    placeholder="Select the assignee for the issue"
                    options={member_options}
                    onChange={e => this.changeAssignee(e.target.value)} />

                <Button type="submit" text="Add Project" />
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects,
    getMembers,
    addIssue
}, dispatch)

const mapStateToProps = props => {
    let { project } = props

    return {
        projects: project.projects,
        members: project.members
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueAddition)