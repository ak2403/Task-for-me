import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';
import { addProject } from '../actions/projectProcess';

class projectComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            newProject: {
                name: '',
                code: '',
                mainProject: ''
            }
        }
        this.addNewProject = this.addNewProject.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let projectData = this.state.newProject;
        projectData[e.target.name] = e.target.value;

        this.setState({
            newProject: projectData
        })
    }

    addNewProject(e) {
        this.state.newProject.mainProject = this.props.project;
        this.props.addProject(this.state.newProject);
    }

    render() {
        let sub_project_list_DOM = '';

        if(this.props.project){
            for(let key in this.props.project.subProject){
                sub_project_list_DOM+=<div className="add-project-leaf">{this.props.project.subProject[key].name}</div>
            }
        }

        return (
            <div>
                {sub_project_list_DOM}
                <div className="add-project-leaf">
                    <Modal trigger={<Icon className="add-icon" name='add' />}>
                        <Modal.Header>Add a Project</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form>
                                    <Form.Field>
                                        <label>Project Name</label>
                                        <input placeholder='Project Name' name="name" onChange={this.onChange} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Project Code</label>
                                        <input placeholder='Project Code' name="code" onChange={this.onChange} />
                                    </Form.Field>
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button primary onClick={this.addNewProject}>
                                Submit
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addProject: addProject
    }, dispatch)
}

const mapStateToProps = (props) => {
    return {
        isAuthenicated: props.authentication.isAuthenicated,
        errorMsg: props.authentication.errorMsg,
        authUser: props.authentication.authUser,
        project: props.authentication.project
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectComponent);