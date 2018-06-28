import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';
import { addProject, getSubProject } from '../actions/projectProcess';

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

    componentWillMount() {
        this.props.getSubProject({
            name: this.props.authUser
        });
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
        let sub_project_list_DOM = [];
        
        if (this.props.subProject) {
            this.props.subProject.map(element => {
                sub_project_list_DOM.push(<div className="add-project-leaf">{element.name}</div>);
            })
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
        addProject: addProject,
        getSubProject: getSubProject
    }, dispatch)
}

const mapStateToProps = (props) => {
    return {
        isAuthenicated: props.authentication.isAuthenicated,
        errorMsg: props.authentication.errorMsg,
        authUser: props.authentication.authUser,
        subProject: props.projectProps.subProject
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectComponent);