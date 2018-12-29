import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getProjects, addProject } from '../../Redux/Actions/projectActions'

class ProjectComponent extends Component{
    state = {
        project_data: {
            name: ''
        }
    }

    changeValue = (name, value) => {
        let {project_data}=this.state
        project_data[name]=value
        this.setState({
            project_data
        })
    }

    onSubmit = () => {
        this.props.addProject(this.state.project_data)
    }

    componentDidMount(){
        this.props.getProjects()
    }
    render(){
        return <div>
            Project
            <input type="text" onChange={e => this.changeValue('name', e.target.value)} />
            <button onClick={this.onSubmit}>Add Project</button>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getProjects, addProject }, dispatch)

const mapStateToProps = props => {
    let { project } = props
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent)