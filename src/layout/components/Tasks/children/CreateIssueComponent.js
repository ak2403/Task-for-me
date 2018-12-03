import React, { Component } from 'react';
import moment from 'moment';
import { Form, Icon, Input, Button, Select, Radio } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewIssue } from '../../../redux/actions/taskAction';

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class CreateFormComponent extends Component {
    constructor() {
        super();
        this.state = {
            newIssue: {
                name: '',
                description: '',
                status: 'to-do',
                comments: [],
                assignee: '',
                reporter: '',
                priority: '',
                type: '',
                created_on: moment().format('MMMM Do YYYY, h:mm:ss a')
            }
        }
        this.changeValue = this.changeValue.bind(this);
        this.addNewIssue = this.addNewIssue.bind(this);
    }

    changeValue = (value, name) => {
        let { newIssue } = this.state;
        newIssue[name] = value;
        this.setState({
            newIssue: newIssue
        })
    }

    addNewIssue = () => {
        let { newIssue } = this.state;
        this.props.addNewIssue(newIssue);
    }

    render() {
        return (
            <div>
                <Form layout="inline" className="login-form">
                    <FormItem label="Title">
                        <Input placeholder="name" name="name" onChange={(event) => this.changeValue(event.target.value, 'name')} />
                    </FormItem>
                    <FormItem label="Description">
                        <TextArea placeholder="Enter the description" autosize={{ minRows: 2, maxRows: 6 }} name="description" onChange={(event) => this.changeValue(event.target.value, 'description')} />
                    </FormItem>
                    <FormItem label="Mode">
                        <Radio.Group onChange={(value) => this.changeValue(value.target.value, 'type')}>
                            <Radio.Button value="bug">Bug</Radio.Button>
                            <Radio.Button value="requirement">Requirement</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="Assignee">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select assignee"
                            onChange={(value) => this.changeValue(value, 'assignee')}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </FormItem>

                    <FormItem label="Priority">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select priority"
                            onChange={(value) => this.changeValue(value, 'priority')}
                        >
                            <Option value="low">Low</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="high">High</Option>
                            <Option value="critical">Critical</Option>
                        </Select>
                    </FormItem>
                    
                    <FormItem>
                        <Button type="primary" className="login-form-button" onClick={this.addNewIssue}>
                            Create Issue
                        </Button>
                    </FormItem>

                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addNewIssue }, dispatch)
}

export default connect('', mapDispatchToProps)(CreateFormComponent);