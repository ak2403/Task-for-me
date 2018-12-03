import React, { Component } from 'react';
import { Select, Button, Modal, Table, Tag, Divider } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateIssueComponent from './CreateIssueComponent';
import queryString from 'query-string'

const Option = Select.Option;

class IssueMenuComponent extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
        this.changeIssueType = this.changeIssueType.bind(this);
    }
    changeIssueType(value, name) {
        this.props.history.push(`/tasks/filter?${name}=${value}`)
        this.props.filterTask({ [name]: value })
    }

    componentDidMount = () => {
        // debugger
    }

    hideModal = () => this.setState({ visible: !this.state.visible })

    render() {
        let { visible } = this.state;
        return (
            <div className="task-menu-container">

                <Select defaultValue="all" style={{ width: 120 }} onChange={(value) => this.changeIssueType(value, 'type')}>
                    <Option value="all">All</Option>
                    <Option value="bug">Bug</Option>
                    <Option value="requirement">Requirement</Option>
                </Select>
                <button className="create-task-button" onClick={this.hideModal}>Create Task</button>
                <custom-modal class={visible ? 'show-modal' : 'hide-modal'}>
                    <div className="modal-overlay" onClick={this.hideModal}></div>
                    <div className="modal-content-layout">
                        <h1>Create new task</h1>
                        <form className="add-task-form">
                            <div>
                                <label>Name</label>
                                <input type="text" name="title" />
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea type="text" rows="5" name="title" />
                            </div>
                            <div>
                                <label>Assignee</label>
                                <select>
                                    <option>Arun Kumar</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </custom-modal>
            </div>
        )
    }
}

export default withRouter(IssueMenuComponent);