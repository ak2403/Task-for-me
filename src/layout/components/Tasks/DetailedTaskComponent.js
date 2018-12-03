import React, { Component } from 'react';
import { Select, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { getDetailedIssue } from '../../redux/actions/taskAction';

const Option = Select.Option;

class DetailedTaskComponent extends Component {
    constructor() {
        super();
        this.state = {
            detailedIssue: ''
        }
    }

    componentDidMount() {
        this.props.getDetailedIssue()
    }

    shouldComponentUpdate(nextProps) {
        let { detailed_issue } = nextProps;
        let { detailedIssue } = this.state;
        
        if (detailed_issue !== detailedIssue) {
            this.setState({
                detailedIssue: detailed_issue
            })
        }
        return true;
    }

    render() {
        let { detailedIssue } = this.state;

        const status_options = [{
            text: 'To Do',
            value: 'to-do'
        }, {
            text: 'In Development',
            value: 'in-development'
        }, {
            text: 'On Hold',
            value: 'on-hold'
        }, {
            text: 'Done',
            value: 'done'
        }]

        return (<div className="detailed-task-layout">
            {detailedIssue ? 
            <div className="detailed-task-container">
                <h1>{detailedIssue.title}</h1>
                <div className="detailed-task-content-layout">
                    <div className="content-layout">
                        created on: {detailedIssue.created_on}
                        Type: {detailedIssue.status}
                        Assignee: {detailedIssue.assignee}
                        Reporter: {detailedIssue.reporter}
                        Description: {detailedIssue.description}
                    </div>
                    <div className="recent-activity-layout">

                    </div>
                </div>
            </div> : ''}
        </div>)

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getDetailedIssue }, dispatch)
}

const mapStateToProps = (props) => {
    let { tasks } = props;
    return {
        detailed_issue: tasks.detailed_issue
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedTaskComponent));