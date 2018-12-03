import React, { Component } from 'react';
import { Button, Modal, Table, Tag, Divider } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTotalIssues } from '../../redux/actions/taskAction';
import IssueMenuComponent from './children/IssueMenuComponent';

class TaskComponent extends Component {
    constructor() {
        super();
        this.state = {
            issues: [],
            checkbox: false
        }
        this.redirectToTask = this.redirectToTask.bind(this);
    }

    redirectToTask = taskID => {
        this.props.history.push(`/task/${taskID}`)
    }

    changeState = () => this.setState({ checkbox: !this.state.checkbox })

    componentDidMount() {
        this.props.getTotalIssues();
    }

    shouldComponentUpdate(nextProps) {
        let { totalIssues } = nextProps;
        let { issues } = this.state;
        if (issues.length !== totalIssues.length) {
            this.setState({
                issues: totalIssues
            })
        }
        return true;
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        let { issues } = this.state;

        const columns = [{
            title: '',
            dataIndex: 'select',
            key: 'select'
        }, {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        }, {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status'
        }, {
            title: 'Reporter',
            dataIndex: 'reporter',
            key: 'reporter'
        }, {
            title: 'Created on',
            dataIndex: 'created_on',
            key: 'created_on'
        }, {
            title: 'Updated on',
            dataIndex: 'updated_on',
            key: 'updated_on'
        }, {
            title: 'Fix Version',
            dataIndex: 'fix_version',
            key: 'fix_version'
        }];
        
        return (
            <div className="task-table-layout">
                <div className="task-menu-layout"><IssueMenuComponent /></div>
                <div className="task-table-layout">
                    <div className="table-header-container">{columns.map(column => <div>{column.title}</div>)}</div>
                    <div className="table-tbody-container">
                        {issues.map(issue => {
                            return (
                                <div className="table-body-container">
                                    <div><span className="table-checkbox" onClick={this.changeState}></span></div>
                                    <div onClick={() => this.redirectToTask(issue._id)}>{issue.title}</div>
                                    <div><text className={`issue-indicator ${issue.status}`}>{issue.status}</text></div>
                                    <div>{issue.reporter}</div>
                                    <div>{issue.created_on}</div>
                                    <div>{issue.updated_on}</div>
                                    <div>{issue.fix_version}</div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (props) => {
    let { tasks } = props;
    return {
        totalIssues: tasks.totalIssues
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getTotalIssues }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskComponent));