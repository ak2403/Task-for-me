import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Input from '../../../Components/input/text-input'
import Select from '../../../Components/select'
import Button from '../../../Components/button'
import { getProjectDetail } from '../../../Redux/Actions/project-actions'

class ProjectEdit extends Component {
    state = {
        edit_project: {}
    }

    componentDidMount() {
        let { id } = this.props
        this.props.getProjectDetail(id)
    }

    shouldComponentUpdate = nextProps => {
        let { project_details } = nextProps
        let { edit_project } = this.state

        if (_.isEmpty(edit_project)) {
            this.setState({
                edit_project: project_details
            })
        }
        return true
    }

    componentWillUnmount() {
        // debugger
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        let { edit_project } = this.state

        let type_options = [{
            name: 'IT',
            value: 'it'
        }]

        return (<div>
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    value={edit_project.name}
                    text="Project Name" />

                <Select
                    text="Type of the project"
                    placeholder="Enter the type of the project"
                    options={type_options}
                    value={edit_project.type}
                    onChange={e => this.changeValue('type', e.target.value)} />

                <Button type="submit" text="Edit Project" />
            </form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getProjectDetail
}, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        project_details: project.project_details
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit)