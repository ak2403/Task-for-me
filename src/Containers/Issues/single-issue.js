import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Jumbotron from '../../Components/Jumbotron'
import { getIssueDetail } from '../../Redux/Actions/issue-actions'

class SingleIssue extends Component {
    componentDidMount() {
        let { state } = this.props.location
        this.props.getIssueDetail(state.id)
    }

    // shouldComponentUpdate = nextProps => {
    //     return true
    // }

    render() {
        let { issue_details } = this.props
        return (<div className="app-detail-container">
            <Jumbotron header={issue_details.title} />
            <div className="app-split-column">
                <div className="app-detailed-layout">
                    <ul>
                        <li>created on: {issue_details.created_on}</li>
                        <li>Description: {issue_details.description}</li>
                    </ul>
                </div>
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getIssueDetail
}, dispatch)

const mapStateToProps = props => {
    let { issue } = props

    return {
        issue_details: issue.issue_details
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleIssue))