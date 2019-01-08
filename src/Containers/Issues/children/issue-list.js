import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Table from '../../../Components/table'
import { getIssues, getIssueDetail } from '../../../Redux/Actions/issue-actions'

class IssueList extends Component {
    componentDidMount = () => {
        this.props.getIssues()
    }

    rowClick = (data) => {
        this.props.getIssueDetail(data._id)
        this.props.history.push({
            pathname: `/issue/${data._id}`,
            state: { id: data._id }
        })
    }

    render() {
        let { issues } = this.props

        let columns = [{
            title: 'Title',
            dataIndex: 'title'
        }, {
            title: 'Status',
            dataIndex: 'status'
        }, {
            title: 'Created By',
            dataIndex: 'created_by',
            render: data => <div>{data['created_by'].name || ''}</div>
        }]

        return (<div className="table-layout">
            <Table
                columns={columns}
                data={issues}
                onRowClick={this.rowClick} />
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getIssues,
    getIssueDetail
}, dispatch)

const mapStateToProps = props => {
    let { issue } = props

    return {
        issues: issue.issues
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IssueList))