import React, { Component } from 'react'
import ProjectList from './layers/project-list'

class ProjectComponent extends Component{
    render(){
        return (<div>
            Projects
            <ProjectList />
        </div>)
    }
}

export default ProjectComponent